import { Navigator } from 'components/navigator';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kyuns blog</title>
        <meta name="description" content="Kihyun's blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navigator />
      </div>
    </>
  );
};

export default Home;
