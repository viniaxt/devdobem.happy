import "normalize.css";
import { AppProps } from "next/app";
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
import "../../public/styles/global.css"
import "react-multi-carousel/lib/styles.css"

import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>H.A.P.P.Y</title>
        <link rel="shortcut icon" href="/images/small-logo.png" />
        <link rel="apple-touch-icon" href="/images/small-logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Levar a atenção em saúde para aqueles que precisam no Brasil e no mundo"
        />
      </Head>
      <Component {...pageProps} />;
    </>
  )
}
