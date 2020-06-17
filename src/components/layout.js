import React from "react"
import styled from "styled-components"
import Nav from "./nav"

const Container = styled.div`
  margin: 0 2rem 10rem 2rem;
  padding: 0;

  @media (min-width: 62rem){
    margin: 4rem 14rem 10rem 14rem;
  }
`

export default function Layout({ children }) {
  return (
    <Container>
      {children}
      <Nav />
    </Container>
  )
}
