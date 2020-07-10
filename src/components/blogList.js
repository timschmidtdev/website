import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

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

const BlogList = ({ data }) => {
  return (
    <BlogListContainer>
      {data.allContentfulPost.edges.map(post => {
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
              <p>{post.node.updatedAt}</p>
            </PostDetails>
          </PostContainerLink>
        )
      })}
    </BlogListContainer>
  )
}

export default BlogList
