import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/post'
export default function Home({ data }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        {data.map(({ id, title, date }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href="/posts/[id]" as={`/posts/${id}`}>
              {title}
            </Link>
            <br />
            {id}
            <br />
            {date}
          </li>
        ))}
      </section>
    </Layout>
  )
}

// 静态生成数据
export async function getStaticProps() {
  const data = getSortedPostsData()

  return { props: { data } }
}
