import '../../public/styles/globals.css';
import Head from 'next/head';
import 'tippy.js/animations/shift-away.css';
import { useRouter } from 'next/router';
import Progress from '../libraries/progress';
import config from '../../config';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return <>
  <Head>
    <title>
      {router.asPath ? (
        config?.titles[router?.asPath] ? (
          config?.titles[router?.asPath]
        ) : '... | Can'
      ) : 'Yükleniyor... | Can'}
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
    <Progress />
    <main style={{ zIndex: 2 }}>
      <Component {...pageProps} />
    </main>
  </>
}

export default MyApp
