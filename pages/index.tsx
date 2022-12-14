import Head from 'next/head'
import { GetServerSideProps, NextPage } from 'next';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';
import { Tweet } from '../typings';
import { fetchTweets } from '../utils/fetchTweets';
import { Toaster } from 'react-hot-toast';

interface Props {
  tweets: Tweet[]
}


export default function Home({ tweets }: Props) {


  return (
    <div className="mx-auto lg:max-w-6xl max-h-screen overflow-hidden">
      <Head>
        <title>Twitter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster />

    <main className='grid grid-cols-9'>

      <Sidebar />

      <Feed tweets={tweets} />

      <Widgets />
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (contest) => {
  const tweets = await fetchTweets();
  return {
    props: {
      tweets,
    }
  }
}
