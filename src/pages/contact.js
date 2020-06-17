import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import Instagram from "../assets/icons/instagram.svg"
import Twitter from "../assets/icons/twitter.svg"
import Github from "../assets/icons/github.svg"
import Linkedin from "../assets/icons/linkedin.svg"

const StyledLink = styled.a`
  margin-right: 1.5rem;
`

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact" description="Contact Tim through social media or complete the form"/>
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
    </Layout>
  )
}
