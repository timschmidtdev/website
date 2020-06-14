import React from "react"
import styled from "styled-components"
import Nav from "../components/nav"
import Header from "../components/header"

const Container = styled.div``

export default function Books() {
  return (
    <Container>
      <Header headerText="Book List"/>
      <h2>Recently Read</h2>
      <h2>Next Up</h2>
      <h2>Some Favorites</h2>
      <Nav />
    </Container>
  )
}
