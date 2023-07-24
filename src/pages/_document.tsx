import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="title" content="CoinSynch" />
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://coinsynch.alyssonbarrera.studio"
        />
        <meta property="og:title" content="CoinSynch" />
        <meta
          property="og:description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
        />
        <meta
          property="og:image"
          content="https://coinsynch.alyssonbarrera.studio/images/preview-image.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://coinsynch.alyssonbarrera.studio"
        />
        <meta property="twitter:title" content="CoinSynch" />
        <meta
          property="twitter:description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
        />
        <meta
          property="twitter:image"
          content="https://coinsynch.alyssonbarrera.studio/images/preview-image.png"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
