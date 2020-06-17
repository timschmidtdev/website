import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const StyledImg = styled.div`
  background-image: ${props => `url(${props.smallImage})`};
  height: 10rem;
  background-repeat: no-repeat;
  background-size: contain;

  @media (min-width: 38rem) {
    background-image: ${props => `url(${props.largeImage})`};
  }
`


const ProjectImage = props => (
  <a
    href={props.url} target="_blank" rel="noreferrer">
    <StyledImg smallImage={props.smallImage} largeImage={props.largeImage}/>
  </a>
)

export default function Code() {
  return (
    <Layout>
      <SEO title="Code" description="Coding projects made by Tim"/>
      <Header headerText="Some Dev Projects"/>
      <ProjectImage
        alt="Leave Calculator"
        smallImage="https://timschmidtdev.s3.amazonaws.com/leave_calculator.png"
        largeImage="https://timschmidtdev.s3.amazonaws.com/leave_calculator_large.png"
        url="http://floating-anchorage-79232.herokuapp.com/"
      />
      <p>A rails app that will definitely take 30 seconds to load since no one uses it.</p>
      <br/>
      <p>eeesh... pretty barren here. Maybe I'll make more personal projects soon.</p>
    </Layout>
  )
}
