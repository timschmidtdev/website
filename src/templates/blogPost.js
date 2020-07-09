import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled from "styled-components"

const PostContainer = styled.div``

export default function BlogPost({ data }) {
  const post = data.contentfulPost
  return (
    <Layout>
      <PostContainer>
        <div>
          <h1>{post.title}</h1>
          <div>{post.body.content[0].content[0].value}</div>
        </div>
        <p>
          Going to need a little more styling for these posts. At least they're
          programmatically created.
        </p>
      </PostContainer>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    contentfulPost(id: { eq: $id }) {
      id
      createdAt(formatString: "MMMM Do, YYYY")
      subTitle
      title
      titleImage {
        file {
          url
        }
        title
      }
      updatedAt
      body {
        content {
          content {
            value
          }
        }
      }
    }
  }
`
