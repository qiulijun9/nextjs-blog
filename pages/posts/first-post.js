import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
export default function FistPost() {
  return (
    <Layout>
      <Head>
        <title>FistPost</title>
      </Head>
      <main>
        first post
        <Link href="/">
          <a className="home-title">主页</a>
        </Link>
      </main>
      <footer>footer</footer>
      <style jsx>{`
        .home-title {
          color: red;
        }
      `}</style>
    </Layout>
  )
}
