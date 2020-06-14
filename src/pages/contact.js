import React from "react"
import styled from "styled-components"
import Nav from "../components/nav"
import Header from "../components/header"

const Container = styled.div``

export default function Contact() {
  return (
    <Container>
      <Header headerText="Contact Me"/>
      <p>@timschmidtdev in most places</p>
      <p>I should probably add a form here...</p>
      <Nav />
    </Container>
  )
}
