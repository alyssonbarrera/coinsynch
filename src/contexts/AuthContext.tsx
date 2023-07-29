/* eslint-disable react-hooks/exhaustive-deps */
import Router from 'next/router'
import { destroyCookie } from 'nookies'
import { createContext, ReactNode, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  IdTokenResult,
  signInWithEmailAndPassword,
} from 'firebase/auth'

import { UserDTO } from '@/dtos/UserDTO'

import { auth } from '@/services/firebase'
import { api } from '@/services/api.client'
import { UserAlreadyExistsError } from '@/services/errors/UserAlreadyExistsError'
import { InvalidCredentialsError } from '@/services/errors/InvalidCredentialsError'

import { saveTokenToCookie } from '@/utils/cookieUtils'

type User = Omit<UserDTO, 'created_at' | 'id'>

type SignInCredentials = {
  email: string
  password: string
}

type SignUpCredentials = {
  name: string
  email: string
  password: string
}

type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<void>
  signUp: (credentials: SignUpCredentials) => Promise<void>
  signOut: () => void
  user: User | null
  isAuthenticated: boolean
}

type AuthProviderProps = {
  children: ReactNode
}

const DEFAULT_IMAGE_URL = 'https://bit.ly/dan-abramov'

let authChannel: BroadcastChannel

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user

  const saveTokenWithExpirationToCookie = (
    token: string,
    tokenResult: IdTokenResult,
  ) => {
    const tokenExpirationTime = tokenResult.expirationTime
    saveTokenToCookie(token, tokenExpirationTime)
  }

  const setAuthorizationHeaderWithToken = (token: string) => {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }

  const signOut = () => {
    auth.signOut()
    destroyCookie(undefined, '@coinsynch:token')
    authChannel.postMessage('signOut')
    Router.push('/')
  }

  const signIn = async ({ email, password }: SignInCredentials) => {
    try {
      const { user: userData } = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      )

      const promises = [userData.getIdToken(), userData.getIdTokenResult()]

      const [token, tokenResult] = (await Promise.all(promises)) as [
        string,
        IdTokenResult,
      ]

      const user = {
        id: userData.uid,
        name: userData.displayName || '',
        email: userData.email || '',
        avatar: userData.photoURL || '',
        isSubscribedToNewsletter: true,
        firebase_id: userData.uid,
      }

      setUser(user)
      saveTokenWithExpirationToCookie(token, tokenResult)
      setAuthorizationHeaderWithToken(token)

      Router.push('/dashboard')
    } catch (error: any) {
      if (
        error.code === 'auth/user-not-found' ||
        error.code === 'auth/wrong-password'
      ) {
        throw new InvalidCredentialsError()
      } else {
        throw new Error(error)
      }
    }
  }

  const signUp = async ({ name, email, password }: SignUpCredentials) => {
    try {
      const { user: userData } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      )

      const user = {
        id: userData.uid,
        name,
        email: userData.email || '',
        avatar: DEFAULT_IMAGE_URL,
        isSubscribedToNewsletter: false,
        firebase_id: userData.uid,
      }

      try {
        await api.post('/users', user)
      } catch (error: any) {
        throw new Error(error)
      }

      await signIn({ email, password })
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        throw new UserAlreadyExistsError()
      } else {
        throw new Error(error)
      }
    }
  }

  useEffect(() => {
    if (!authChannel) {
      authChannel = new BroadcastChannel('auth')

      authChannel.onmessage = (message) => {
        switch (message.data) {
          case 'signOut':
            Router.push('/')
            break
          default:
            break
        }
      }
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ signIn, signUp, signOut, isAuthenticated, user }}
    >
      {children}
    </AuthContext.Provider>
  )
}
