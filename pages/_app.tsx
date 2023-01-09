import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Navigator } from 'components/navigator';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigator />
      <Component {...pageProps} />
    </>
  );
}
