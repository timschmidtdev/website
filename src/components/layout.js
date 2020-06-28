import React from "react"
import styled from "styled-components"
import Nav from "./nav"

const Container = styled.div`
  margin: 0 5% 10rem 5%;
  padding: 0;

  @media (min-width: 62rem){
    margin: 4rem 20% 10rem 20%;
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
