import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import BlogList from "../components/blogList"
import SEO from "../components/seo"
import { graphql } from "gatsby"

export default function Blog({ data }) {
  return (
    <Layout>
      <SEO title="Blog" description="A blog covering a broad range of topics" />
      <Header headerText="Blog" />
      <p>This content will cover a broad range of things like:</p>
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
          createdAt(formatString: "MMMM Do, YYYY")
          subTitle
          title
          titleImage {
            file {
              url
            }
            title
          }
          id
          body {
            content {
              content {
                value
              }
            }
          }
        }
      }
    }
  }
`
