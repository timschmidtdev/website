import React from "react"
import Nav from "../components/nav"
import Header from "../components/header"
import styled from "styled-components"

const AppContainer = styled.div`
`

export default function Home() {
  return (
    <AppContainer>
      <Header headerText="Tim Schmidt" />
      <p>Hi! I'm Tim.</p>
      <p>I'm a developer.</p>
      <p>I also like machine knitting, cycling, running, and cross country skiing.</p>
      <Nav />
    </AppContainer>
  )
}
