import React from "react"
import styled from "styled-components"

const BlogListContainer = styled.div``

const PostContainer = styled.a`
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

const BlogList = ({ data }) => {
  data.allContentfulPost.edges.forEach(post => console.log(post.node))
  return (
    <BlogListContainer>
      {data.allContentfulPost.edges.map(post => {
        return (
          <PostContainer>
            <StyledImage
              alt={post.node.titleImage.title}
              src={post.node.titleImage.file.url}
            />
            <PostDetails>
              <h1>{post.node.title}</h1>
              <h4>{post.node.subTitle}</h4>
              <p>{post.node.createdAt}</p>
            </PostDetails>
          </PostContainer>
        )
      })}
    </BlogListContainer>
  )
}

export default BlogList
