import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header, Tilde } from '@layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <div className='mt-4 px-8'>
        <Tilde />
      </div>
      <div className='container mx-auto px-10 md:max-w-xl md:px-0'>
        <Header />
        <Component {...pageProps} />
      </div>
    </main>
  )
}
