import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header, Footer, Tilde } from '@components'
import NextNProgress from 'nextjs-progressbar'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <div className='mt-4 px-8'>
        <Tilde />
      </div>
      <div className='container mx-auto px-10 md:max-w-4xl md:px-4'>
        <Header />
        <NextNProgress color='#A0A0A0' options={{ showSpinner: false }} />
        <Component {...pageProps} />
        <Footer />
      </div>
    </main>
  )
}
