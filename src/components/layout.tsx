import Head from 'next/head';

const name = 'Andrey Rannerson Visniewski';

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode,
  home?: boolean
}) {
  return (
    <div className="container">
      <Head>
        <meta 
          name='blog'
          content='Pagina inicial do site pessoal'
          />
      </Head>
    </div>
  )
}