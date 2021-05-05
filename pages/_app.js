import 'reset.css';
import GlobalProvider from '../styles/GlobalProvider';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  )
}

export default MyApp
