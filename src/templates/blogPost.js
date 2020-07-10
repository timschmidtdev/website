import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const PostContainer = styled.div`
  margin-top: 4rem;
`

const PostImg = styled(Img)`
  width: 100%;
  height: 12rem;
  @media (min-width: 45rem) {
    width: 30rem;
    margin-bottom: 2rem;
  }
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Dates = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const BodyContainer = styled.div``

export default function BlogPost({ data }) {
  const post = data.contentfulPost
  const updated = () => {
    if (post.createdAt !== post.updatedAt) {
      return <p>Updated: {post.updatedAt}</p>
    }
  }
  return (
    <Layout>
      <PostContainer>
        <TitleContainer>
          <PostImg alt={post.titleImage.title} fluid={post.titleImage.fluid} />
          <h1>{post.title}</h1>
        </TitleContainer>
        <Dates>
          {updated()}
          <p>Published: {post.createdAt}</p>
        </Dates>
        <BodyContainer>{post.body.content[0].content[0].value}</BodyContainer>
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
        title
        fluid(quality: 10) {
          base64
          srcWebp
          srcSetWebp
        }
      }
      updatedAt(formatString: "MMMM Do, YYYY")
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
