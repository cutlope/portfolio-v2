import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header, Footer, Tilde } from '@components'
import NextNProgress from 'nextjs-progressbar'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <svg
        className='pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light'
        width='100%'
        height='100%'>
        <filter id='pedroduarteisalegend'>
          <feTurbulence
            type='fractalNoise'
            baseFrequency='0.80'
            numOctaves='4'
            stitchTiles='stitch'
          />
        </filter>
        <rect
          width='100%'
          height='100%'
          filter='url(#pedroduarteisalegend)'></rect>
      </svg>
      <div className='px-8 pt-4'>
        <Tilde />
      </div>

      <div className='container mx-auto px-6 md:max-w-4xl md:px-4'>
        <Header />
        <NextNProgress color='#A0A0A0' options={{ showSpinner: false }} />
        <Component {...pageProps} />
        <Footer />
      </div>
    </main>
  )
}
