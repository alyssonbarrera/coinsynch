import axios from 'axios'
import { GetServerSidePropsContext, PreviewData } from 'next'
import { parseCookies } from 'nookies'
import { ParsedUrlQuery } from 'querystring'

const API_URL = process.env.NEXT_PUBLIC_API_URL

type SetupAPIClientProps =
  | GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
  | undefined

export function setupAPIClient(context: SetupAPIClientProps = undefined) {
  const { '@coinsynch:token': token } = parseCookies(context)

  const api = axios.create({
    baseURL: API_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return api
}
