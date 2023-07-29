import { setCookie } from 'nookies'

export function getCookieMaxAge(expirationTime: string): number {
  const expirationDate = new Date(expirationTime)
  const currentDate = new Date()
  const maxAgeInSeconds: number = Math.floor(
    (expirationDate.getTime() - currentDate.getTime()) / 1000,
  )

  return maxAgeInSeconds
}

export function saveTokenToCookie(token: string, expirationTime: string) {
  const maxAgeInSeconds = getCookieMaxAge(expirationTime)

  setCookie(undefined, '@coinsynch:token', token, {
    maxAge: maxAgeInSeconds,
    path: '/',
  })
}
