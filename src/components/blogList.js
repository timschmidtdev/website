import React from "react"
import styled from "styled-components"

const BlogListContainer = styled.div``

const PostContainerLink = styled.a`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  @media (min-width: 45rem) {
    flex-direction: row;
  }
`

const StyledImage = styled.img`
  width: 20rem;
  margin-right: 2rem;
  border-radius: 0.2rem;
`

const PostDetails = styled.div``

const BlogList = ({ data }) => {
  return (
    <BlogListContainer>
      {data.allContentfulPost.edges.map(post => {
        const url = `/${post.node.title.toLowerCase().split(" ").join("-")}`
        return (
          <PostContainerLink href={url}>
            <StyledImage
              alt={post.node.titleImage.title}
              src={post.node.titleImage.file.url}
            />
            <PostDetails>
              <h1>{post.node.title}</h1>
              <h4>{post.node.subTitle}</h4>
              <p>{post.node.createdAt}</p>
            </PostDetails>
          </PostContainerLink>
        )
      })}
    </BlogListContainer>
  )
}

export default BlogList
