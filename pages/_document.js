import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, minimum-scale=1.0"
          />
        </Head>
        <body className="no-js">
          <script
            dangerouslySetInnerHTML={{
              __html: `document.body.classList.remove('no-js');`,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
