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

      <div className='container mx-auto px-10 md:max-w-4xl md:px-4'>
        <Header />
        <NextNProgress color='#A0A0A0' options={{ showSpinner: false }} />
        <div className='fixed top-0 right-0 z-50 m-8 flex h-6 w-6 items-center justify-center rounded-full bg-gray-700 p-3 font-mono text-xs text-white sm:bg-pink-500 md:bg-orange-500 lg:bg-green-500 xl:bg-blue-500'>
          <div className='block sm:hidden md:hidden lg:hidden xl:hidden'>
            al
          </div>
          <div className='hidden sm:block md:hidden lg:hidden xl:hidden'>
            sm
          </div>
          <div className='hidden sm:hidden md:block lg:hidden xl:hidden'>
            md
          </div>
          <div className='hidden sm:hidden md:hidden lg:block xl:hidden'>
            lg
          </div>
          <div className='hidden sm:hidden md:hidden lg:hidden xl:block'>
            xl
          </div>
        </div>
        <Component {...pageProps} />
        <Footer />
      </div>
    </main>
  )
}
