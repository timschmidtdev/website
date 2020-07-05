import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import styled from "styled-components"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const PostContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-diretion: row;
`

const StyledImage = styled.img`
  width: 20rem;
  margin-right: 2rem;
  border-radius: 0.2rem;
`

const PostDetails = styled.div``

export default function Blog({ data }) {
  console.log(data)
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
      <PostContainer>
        <StyledImage
          alt={data.contentfulAsset.title}
          src={data.contentfulAsset.file.url}
        ></StyledImage>
        <PostDetails>
          <h1>{data.contentfulPost.title}</h1>
          <h4>{data.contentfulPost.subTitle}</h4>
          <p>{data.contentfulPost.createdAt}</p>
        </PostDetails>
      </PostContainer>
      <PostContainer>
        <StyledImage
          alt={data.contentfulAsset.title}
          src={data.contentfulAsset.file.url}
        ></StyledImage>
        <PostDetails>
          <h1>{data.contentfulPost.title}</h1>
          <h4>{data.contentfulPost.subTitle}</h4>
          <p>{data.contentfulPost.createdAt}</p>
        </PostDetails>
      </PostContainer>
      <PostContainer>
        <StyledImage
          alt={data.contentfulAsset.title}
          src={data.contentfulAsset.file.url}
        ></StyledImage>
        <PostDetails>
          <h1>{data.contentfulPost.title}</h1>
          <h4>{data.contentfulPost.subTitle}</h4>
          <p>{data.contentfulPost.createdAt}</p>
        </PostDetails>
      </PostContainer>
    </Layout>
  )
}

export const query = graphql`
  query {
    contentfulAsset(contentful_id: { eq: "2ElETKLdbfX0SXR6S7zMQY" }) {
      id
      title
      file {
        url
      }
    }
    contentfulPost(id: { eq: "2c15328f-a0c8-5cc9-a56b-397342d6b1ae" }) {
      id
      title
      subTitle
      body {
        body
      }
      createdAt(formatString: "MMMM Do, YYYY")
    }
  }
`
