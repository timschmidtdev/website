import React from "react"
import styled from "styled-components"
import Instagram from "../assets/icons/instagram.svg"
import Twitter from "../assets/icons/twitter.svg"
import Github from "../assets/icons/github.svg"
import Linkedin from "../assets/icons/linkedin.svg"

const Container = styled.div``

const StyledLink = styled.a`
  margin-right: 1.5rem;
`

export default function Social() {
  return (
    <Container>
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
    </Container>
  )
}
