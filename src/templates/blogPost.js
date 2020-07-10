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
  flex-direction: column;
`

const DateP = styled.p`
  margin: 0;
`

const BodyContainer = styled.div`
  margin-top: 2rem;
`

export default function BlogPost({ data }) {
  const post = data.contentfulPost
  const updated = () => {
    if (post.createdAt !== post.updatedAt) {
      return <DateP>Updated: {post.updatedAt}</DateP>
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
          <DateP>Published: {post.createdAt}</DateP>
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
