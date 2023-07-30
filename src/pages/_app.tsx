import 'swiper/css'
import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

import { Providers } from '@/providers'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#232323',
            color: '#FFFFFF',
            paddingBlock: '15px',
            paddingInline: '15px',
          },
          duration: 4000,
        }}
      />
      <Component {...pageProps} />
    </Providers>
  )
}
