import Head from 'next/head'
import Layout from '@/components/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />

      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout>
          <div className="flex items-center justify-between w-full">
            <div className='w-1/2'>
              <h1>A stunning developer</h1>
              <p>This site is still in development</p>
            </div>
            {/* <div className='w-1/2'>
              <h1>A stunning developer</h1>
              <p>i am here to help you achive your dreams through me hehe</p>
            </div> */}
          </div>

        </Layout>
      </main>
    </>
  )
}
