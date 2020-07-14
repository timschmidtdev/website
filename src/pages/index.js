import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import styled from "styled-components"
import SEO from "../components/seo"

const StyledBody = styled.div`
  text-align: center;
`

const Home = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        description="Home page for Tim Schmidt's personal website"
      />
      <Header headerText="Tim Schmidt" />
      <StyledBody>
        <p>Hi! I'm Tim.</p>
        <p>I'm a developer.</p>
        <p>
          I also like machine knitting, cycling, running, and cross country
          skiing.
        </p>
      </StyledBody>
    </Layout>
  )
}

export default Home
