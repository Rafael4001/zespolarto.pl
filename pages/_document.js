import React, { Fragment } from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../config/theme';
// import { initGTM, renderGTM } from '../src/utilities/analytics';
import { FAVICON } from '../src/constants';

class MyDocument extends Document {
  render() {
    return (
      <html lang="pl" dir="ltr">
      <Head>
        {/*{initGTM()}*/}
        {/*<link rel="shortcut icon" type="image/x-icon" href={FAVICON} />*/}
        {/*<link rel="icon" type="image/x-icon" href={FAVICON} />*/}

        <link rel="apple-touch-icon" sizes="180x180" href={FAVICON.appleTouch}/>
        <link rel="icon" type="image/png" sizes="32x32" href={FAVICON.favicon32x32}/>
        <link rel="icon" type="image/png" sizes="16x16" href={FAVICON.favicon16x16}/>
        <link rel="mask-icon" href={FAVICON.safari} color="#5bbad5"/>
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

        <link href="https://fonts.googleapis.com/css?family=Parisienne&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Bilbo+Swash+Caps&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Baskervville&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400i&display=swap" rel="stylesheet"/>

        {/*  na cytaty font
      https://fonts.google.com/specimen/Sacramento
      */}
      </Head>
      <body>
      {/*{renderGTM()}*/}
      <Main/>
      <NextScript/>
      </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <Fragment key="styles">
        {initialProps.styles}
        {/*{sheets.getStyleElement()}*/}
      </Fragment>,
    ],
  };
};

export default MyDocument;
