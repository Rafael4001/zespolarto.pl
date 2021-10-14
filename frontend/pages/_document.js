import React, { Fragment } from 'react'

import Document,
{
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { FAVICON } from '../src/constants'
import { ServerStyleSheet } from 'styled-components'
import { ServerStyleSheets } from '@material-ui/styles'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const styledComponentsSheet = new ServerStyleSheet()
    const materialSheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            styledComponentsSheet.collectStyles(
              materialSheets.collect(<App {...props} />)
            )
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <Fragment>
            {initialProps.styles}
            {materialSheets.getStyleElement()}
            {styledComponentsSheet.getStyleElement()}
          </Fragment>
        )
      }
    } finally {
      styledComponentsSheet.seal()
    }
  }

  render () {
    return (
      <Html lang="pl">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href={FAVICON.appleTouch}/>
          <link rel="icon" type="image/png" sizes="32x32" href={FAVICON.favicon32x32}/>
          <link rel="icon" type="image/png" sizes="16x16" href={FAVICON.favicon16x16}/>
          <link rel="mask-icon" href={FAVICON.safari} color="#5bbad5"/>

          <link href="https://fonts.googleapis.com/css?family=Parisienne&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Bilbo+Swash+Caps&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Baskervville&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400i&display=swap" rel="stylesheet"/>

          {/*  na cytaty font
      https://fonts.google.com/specimen/Sacramento
      */}
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}

// MyDocument.getInitialProps = async (ctx) => {
//   // Resolution order
//   //
//   // On the server:
//   // 1. app.getInitialProps
//   // 2. page.getInitialProps
//   // 3. document.getInitialProps
//   // 4. app.render
//   // 5. page.render
//   // 6. document.render
//   //
//   // On the server with error:
//   // 1. document.getInitialProps
//   // 2. app.render
//   // 3. page.render
//   // 4. document.render
//   //
//   // On the client
//   // 1. app.getInitialProps
//   // 2. page.getInitialProps
//   // 3. app.render
//   // 4. page.render
//
//   // Render app and page and get the context of the page with collected side effects.
//   const sheets = new ServerStyleSheets();
//   const originalRenderPage = ctx.renderPage;
//
//   ctx.renderPage = () =>
//     originalRenderPage({
//       enhanceApp: App => props => sheets.collect(<App {...props} />),
//     });
//
//   const initialProps = await Document.getInitialProps(ctx);
//
//   return {
//     ...initialProps,
//     // Styles fragment is rendered after the app and page rendering finish.
//     styles: [
//       <Fragment key="styles">
//         {initialProps.styles}
//         {/*{sheets.getStyleElement()}*/}
//       </Fragment>,
//     ],
//   };
// };

export default MyDocument
