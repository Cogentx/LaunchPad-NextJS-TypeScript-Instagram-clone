import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Feed from '../components/Feed';
import Header from '../components/Header';
import Modal from '../components/Modal';

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <Modal/>

      <Feed />

    </div>
  );
};

export default Home;
