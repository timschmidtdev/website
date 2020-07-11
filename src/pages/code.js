import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import CodeList from "../components/codeList"
import { graphql } from "gatsby"
import SEO from "../components/seo"

export default function Code({ data }) {
  return (
    <Layout>
      <SEO title="Code" description="Coding projects made by Tim" />
      <Header headerText="Some Dev Projects" />
      <CodeList data={data} />
    </Layout>
  )
}

export const query = graphql`
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
