import React, { useState } from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"

const BlogListContainer = styled.div``

const PostContainerLink = styled.a`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  @media (min-width: 45rem) {
    flex-direction: row;
  }
`

const StyledImage = styled(Img)`
  min-width: 100%;
  height: 10rem;
  border-radius: 0.2rem;
  @media (min-width: 45rem) {
    min-width: 20rem;
    margin-right: 2rem;
  }
`

const PostDetails = styled.div`
  text-align: center;
  @media (min-width: 45rem) {
    text-align: left;
  }
`

const StyledH1 = styled.h1`
  margin: 1rem;
  @media (min-width: 45rem) {
    margin: auto;
  }
`

const TagButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const StyledButton = styled.button``

const blogQuery = graphql`
  query {
    allContentfulPost {
      edges {
        node {
          id
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
          tagReference {
            id
            title
          }
        }
      }
    }
    allContentfulTag {
      edges {
        node {
          title
          id
        }
      }
    }
  }
`

const Blog = () => {
  const data = useStaticQuery(blogQuery)
  const postData = {
    posts: data.allContentfulPost.edges,
    tags: data.allContentfulTag.edges.map(tag => tag.node.title).sort(),
  }
  const [state, setState] = useState(postData)
  const changedPostData = event => {
    const changedPosts = postData.posts.filter(post =>
      post.node.tagReference.find(tag => tag.title === event.target.textContent)
    )
    const newPostData = {
      posts: changedPosts,
      tags: state.tags,
    }
    return newPostData
  }
  return (
    <Layout>
      <SEO title="Blog" description="A blog covering a broad range of topics" />
      <Header headerText="Blog" />
      <TagButtons>
        {state.tags.map(tag => {
          return (
            <StyledButton onClick={e => setState(changedPostData(e))}>
              {tag}
            </StyledButton>
          )
        })}
      </TagButtons>
      <BlogListContainer>
        {state.posts.map(post => {
          const url = `/${post.node.title.toLowerCase().split(" ").join("-")}`
          return (
            <PostContainerLink href={url}>
              <StyledImage
                alt={post.node.titleImage.title}
                fluid={post.node.titleImage.fluid}
              />
              <PostDetails>
                <StyledH1>{post.node.title}</StyledH1>
                <h4>{post.node.subTitle}</h4>
              </PostDetails>
            </PostContainerLink>
          )
        })}
      </BlogListContainer>
    </Layout>
  )
}

export default Blog
