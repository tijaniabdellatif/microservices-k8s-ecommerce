import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
            
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300;1,400&display=swap" rel="stylesheet" /> 
        </Head>
 
      <body>
    
        <Main />
     
        <NextScript />
      </body>
    </Html>
  )
}
