import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { GetStaticProps } from 'next'
// import { getSortedPostsData } from '@/lib/posts'
import Date from '@/components/date'
import text from '@/utils/text'
import Props from '@/types/Props'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function Home({ posts }: { posts: Props[] }) {
  const postId = posts.map((post) => post.id)

  const listItems = posts.map(
    ({ frontMatter: { description, tags, date, title } }, index) => (
      <li className="{}" key={index}>
        <Link href={text.POST_ROUTE + postId} passHref>
          <h2>{title}</h2>
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
        </Link>
      </li>
    )
  )

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
        <ul className={utilStyles.list}>{listItems}</ul>
      </section>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('src', 'posts'))
  const posts = files.map((filename) => {
    const mardownWithMeta = fs.readFileSync(path.join('src', 'posts', filename))
    const { data: frontMatter } = matter(mardownWithMeta)

    return {
      frontMatter,
      id: filename.split('.')[0],
    }
  })

  return {
    props: {
      posts,
    },
  }
}
