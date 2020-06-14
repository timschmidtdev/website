import React from "react"
import styled from "styled-components"
import Nav from "../components/nav"
import Header from "../components/header"

const Container = styled.div``

export default function Code() {
  return (
    <Container>
      <Header headerText="Some Dev Projects"/>
      <h2><a href="http://floating-anchorage-79232.herokuapp.com/" target="_blank" rel="noreferrer">Leave Calculator</a></h2>
      <p>A rails app that will definitely take 30 seconds to load since no one uses it</p>
      <Nav />
    </Container>
  )
}
