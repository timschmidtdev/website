import React from "react"
import styled from "styled-components"
import Nav from "../components/nav"
import Header from "../components/header"
import Instagram from "../icons/instagram.svg"
import Twitter from "../icons/twitter.svg"
import Github from "../icons/github.svg"
import Linkedin from "../icons/linkedin.svg"

const Container = styled.div``

const StyledLink = styled.a`
  margin-right: 1.5rem;
`

export default function Contact() {
  return (
    <Container>
      <Header headerText="@timschmidtdev"/>
      <StyledLink href="https://www.instagram.com/timschmidtdev/" target="_blank" rel="noreferrer">
        <Instagram />
      </StyledLink>
      <StyledLink href="https://twitter.com/timschmidtdev" target="_blank" rel="noreferrer">
        <Twitter />
      </StyledLink>
      <StyledLink href="https://github.com/timschmidtdev" target="_blank" rel="noreferrer">
        <Github />
      </StyledLink>
      <StyledLink href="https://linkedin.com/in/timothyjschmidt" target="_blank" rel="noreferrer">
        <Linkedin />
      </StyledLink>
      <p>I should probably add a form here so you can email me too...</p>
      <Nav />
    </Container>
  )
}
