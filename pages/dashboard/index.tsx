import type { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { Layout } from '../../layouts/layout'
import { SITE } from '../../src/graphql/query/siteV1.query'
import { Site } from '../../src/interfaces/siteV1'
import { graphQLClientS } from '../../src/swr/graphQLClient'
import { seo } from '../../src/utils/function'

interface Props {
  site: Site
}

const Dashboard: FC<Props> = ({ site }) => {
  const { query, asPath } = useRouter()
  console.log('/'.split('/'));
  
  return (
    <Layout head={seo(site, asPath)!}>
      <h1>{asPath}</h1>
    </Layout>
  )
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { site } = await graphQLClientS.request(SITE, { _id: process.env.API_SITE })

  return {
    props: { site },
    revalidate: 10,
  }
}
export default Dashboard
