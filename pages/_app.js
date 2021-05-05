import Head from 'next/head';
import 'reset.css';
import NumberProvider from '../components/NumberProvider';
import GlobalProvider from '../styles/GlobalProvider';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <NumberProvider>
      <Head>
        <title>fcc Calculator 2</title>
        <meta name="description" content="Calculator made for freeCodeCamp Fron-End libraries certification" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      </NumberProvider>
    </GlobalProvider>
  )
}

export default MyApp
