import React from "react"
import styled from "styled-components"
import Instagram from "../assets/icons/instagram.svg"
import Twitter from "../assets/icons/twitter.svg"
import Github from "../assets/icons/github.svg"
import Linkedin from "../assets/icons/linkedin.svg"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 17rem;
`

const StyledLink = styled.a``

const Social = () => {
  return (
    <Container>
      <LinkContainer>
        <StyledLink
          href="https://www.instagram.com/timschmidtdev/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram />
        </StyledLink>
        <StyledLink
          href="https://twitter.com/timschmidtdev"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter />
        </StyledLink>
        <StyledLink
          href="https://github.com/timschmidtdev"
          target="_blank"
          rel="noreferrer"
        >
          <Github />
        </StyledLink>
        <StyledLink
          href="https://linkedin.com/in/timothyjschmidt"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin />
        </StyledLink>
      </LinkContainer>
    </Container>
  )
}

export default Social
