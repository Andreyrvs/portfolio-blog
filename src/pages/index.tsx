import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'

const presentation1 =
  'Olá, Eu sou Andrey. Tenho interesse em atuar como desenvolvedor Web, diante disso estou em processo de transição de carreira tendo atuado no setor público.'

const presentation2 =
  'Decidi me especializar na área de tecnologia após alguns anos trabalhando em serviços braçais que eram repetitivos e exigiam pouco conhecimento. Agora, estou animado para me desenvolver em tecnologias como TypeScript, Next.js, para solucionar desafios em minha carreira.'

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string
    title: string
    id: string
    summary: string
  }[]
}) {
  console.log(allPostsData);
  
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          {presentation1} {presentation2}
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, summary, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small>{summary}</small>
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
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
