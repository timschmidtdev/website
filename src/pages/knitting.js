import React from "react"
import styled from "styled-components"
import Nav from "../components/nav"
import Header from "../components/header"

const Container = styled.div``

export default function Knitting() {
  return (
    <Container>
      <Header headerText="Knitting"/>
      <p>A place for machine knit designs, patterns, and technical concepts.</p>
      <p>It would be nice to add user login through Google & Twitter so people could add comments.</p>
      <Nav />
    </Container>
  )
}
