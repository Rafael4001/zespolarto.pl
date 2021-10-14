import React, { useEffect } from 'react'
import '../styles/globals.css'
import { StylesProvider } from '@material-ui/core/styles'
import theme from '../config/theme'
import PropTypes from 'prop-types'
import { FAVICON } from '../src/constants'
import Head from 'next/head'

function MyApp ({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])

  return (
   <StylesProvider injectFirst={true}>
     <Head>
       <meta name="msapplication-TileColor" content="#da532c"/>
       <meta name="theme-color" content="#ffffff"/>
       <link rel="manifest" href={FAVICON.siteWebManifest}/>

       <meta charSet="utf-8"/>
       {/* PWA primary color */}
       <meta name="theme-color" content={theme.palette.primary.main}/>
       {/* Use minimum-scale=1 to enable GPU rasterization */}
       <meta
         name="viewport"
         content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
       />
       <meta name="google" value="notranslate"/>
     </Head>
     <Component {...pageProps} />
   </StylesProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
}

export default MyApp
