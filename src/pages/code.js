import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import CodeList from "../components/codeList"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"

const codeQuery = graphql`
  query {
    allContentfulProject {
      edges {
        node {
          id
          title
          subTitle
          titleImage {
            fluid(quality: 10) {
              base64
              srcWebp
              srcSetWebp
            }
          }
        }
      }
    }
  }
`

const Code = () => {
  const data = useStaticQuery(codeQuery)
  return (
    <Layout>
      <SEO title="Code" description="A few of my coding projects" />
      <Header headerText="Some Dev Projects" />
      <CodeList data={data} />
    </Layout>
  )
}

export default Code
