import 'swiper/css'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { FormContextProvider } from '@/contexts/FormContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FormContextProvider>
      <Component {...pageProps} />
    </FormContextProvider>
  )
}
