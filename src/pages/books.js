import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Header from "../components/header"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"

const StyledUl = styled.ul`
  line-height: 1.5rem;
`

const StyledLi = styled.li`
  margin: 0.75rem 0;
`

const Book = props => (
  <StyledLi>
    <a href={props.url} target="_blank" rel="noreferrer">
      <i>{props.title}</i>
      <br />
      {props.author}
      <br />
      {props.year}
    </a>
  </StyledLi>
)

const bookQuery = graphql`
  query {
    allContentfulBook {
      edges {
        node {
          author
          title
          year
          url
          bookTagReference {
            title
          }
        }
      }
    }
  }
`

const Books = () => {
  const data = useStaticQuery(bookQuery)
  const booksByTag = {
    Favorites: [],
    Technology: [],
    "Up Next": [],
  }
  data.allContentfulBook.edges.forEach(book =>
    book.node.bookTagReference.forEach(tag =>
      Object.keys(booksByTag).forEach(bookTag => {
        if (bookTag === tag.title) {
          booksByTag[bookTag].push(book)
        }
      })
    )
  )
  const buildBookSection = tag => (
    <StyledUl>
      {booksByTag[tag].map(book => {
        return (
          <Book
            author={book.node.author}
            title={book.node.title}
            year={book.node.year}
            url={book.node.url}
          />
        )
      })}
    </StyledUl>
  )
  return (
    <Layout>
      <SEO title="Books" description="Books recommended by Tim" />
      <Header headerText="Book List" />
      <h2>Up Next</h2>
      {buildBookSection("Up Next")}
      <h2>Some Favorites</h2>
      {buildBookSection("Favorites")}
      <h2>Technology</h2>
      {buildBookSection("Technology")}
    </Layout>
  )
}

export default Books
