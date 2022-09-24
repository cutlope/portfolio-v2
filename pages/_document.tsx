import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  window.localStorage.isDarkMode = 'true'
  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`

export default function Document() {
  return (
    <Html className='h-full antialiased' lang='en'>
      <Head>
        <link rel='icon' type='image/svg+xml' href='favicon.svg' />
        <link rel='icon' type='image/png' href='favicon.png' />
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
      </Head>
      <body className='bg-zinc-50 selection:bg-purple-500/90 selection:text-white dark:bg-gray-900'>
        <Main />
        <NextScript />
        {process.env.NODE_ENV === 'production' && (
          <Script
            data-website-id='a4140853-6912-4d22-bd8d-db31185f494d'
            src='https://umami-analytics-sand.vercel.app/cutlope.js'
            strategy='worker'
          />
        )}
      </body>
    </Html>
  )
}
