import jwtDecode from 'jwt-decode'
import { parseCookies } from 'nookies'

import { UserDTO } from '@/dtos/UserDTO'
import { withSSRAuth } from '@/utils/withSSRAuth'

import { useAuth } from '@/hooks/useAuth'
import { setupAPIClient } from '@/services/api.core'

type DashboardProps = {
  user: UserDTO
}

export default function Dashboard({ user }: DashboardProps) {
  const { signOut } = useAuth()

  return (
    <>
      <button onClick={signOut}>Voltar</button>
      <h1>Dashboard - Welcome, {user.name}!</h1>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (context) => {
  // because of the nature of the fake API, fetching the token is required to extract the firebase_id for retrieving user data
  const { '@coinsynch:token': token } = parseCookies(
    context,
    '@coinsynch:token',
  )

  const decodedToken = jwtDecode(token) as { user_id: string }

  const apiClient = setupAPIClient(context)

  try {
    const { data } = await apiClient.get('/users', {
      params: {
        firebase_id: decodedToken.user_id,
      },
    })

    const user = data[0]

    if (!user) {
      return {
        props: {},
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }

    return {
      props: {
        user,
      },
    }
  } catch {
    return {
      props: {
        user: {},
      },
    }
  }
})
