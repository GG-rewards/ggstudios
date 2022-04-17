import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>GG Studios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="GG Studios" />
        <p className="description">
          Sureeee</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
