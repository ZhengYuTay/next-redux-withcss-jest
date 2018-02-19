/*
In production the stylesheet is compiled to .next/static/style.css and served from /_next/static/style.css

You have to include it into the page using either next/head or a custom _document.js, as is being done in this file.
*/

import Document, { Head, Main, NextScript } from "next/document";

const prod = process.env.NODE_ENV === "production";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          {prod && <link rel="stylesheet" href="/_next/static/style.css" />}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
