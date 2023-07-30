import { parseCookies } from 'nookies'
import { admin } from '@/services/firebase.admin'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

export function withSSRAuth(fn: GetServerSideProps) {
  return async (context: GetServerSidePropsContext) => {
    try {
      const token = parseCookies(context)['@coinsynch:token']

      await admin.auth().verifyIdToken(token)

      return await fn(context)
    } catch (error) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
  }
}
