import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import BlogList from "../components/blogList"
import { graphql } from "gatsby"
import SEO from "../components/seo"

export default function Blog({ data }) {
  return (
    <Layout>
      <SEO title="Blog" description="A blog covering a broad range of topics" />
      <Header headerText="Blog" />
      <p>This content covers a broad range of things like:</p>
      <ul>
        <li>Machine knit designs, patterns, and technical concepts</li>
        <li>Software developer topics</li>
        <li>Cross country skiing, running, and cycling</li>
      </ul>
      <br />
      <BlogList data={data} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulPost {
      edges {
        node {
          id
          createdAt(formatString: "MMMM Do, YYYY")
          updatedAt(formatString: "MMMM Do, YYYY")
          subTitle
          title
          titleImage {
            title
            fluid(quality: 10) {
              base64
              srcWebp
              srcSetWebp
            }
          }
          body {
            content {
              content {
                value
              }
            }
          }
          node_locale
        }
      }
    }
  }
`
