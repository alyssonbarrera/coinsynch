import { parseCookies } from 'nookies'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

export function withSSRAuth(fn: GetServerSideProps) {
  return async (context: GetServerSidePropsContext) => {
    const token = parseCookies(context)['@coinsynch:token']

    if (!token) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }

    try {
      return await fn(context)
    } catch (error) {}
  }
}
