import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getSortedPostsData } from '../lib/posts'
import Date from '@/components/date'
import text from '@/utils/text'
import { Props } from '@/types/Props'

export default function Home({ posts }: { posts: Props[] }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          {text.presentation1} {text.presentation2}
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {posts.map(({ id, date, tags, description, title, thumbnailUrl }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`${text.POSTROUTE}${id}`}>{title}</Link>
              <br />
              <small>{description}</small>
              <br />
              <small>
                Tags:
                {tags.map((item: string) => (
                  <b key={item}>{` ${item}, `}</b>
                ))}
              </small>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPostsData()
  return {
    props: {
      posts,
    },
  }
}
