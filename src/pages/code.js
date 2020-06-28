import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Img from "gatsby-image"
import SEO from "../components/seo"

const ProjectImg = props => (
  <a href={props.url} target="_blank" rel="noreferrer">
    <Img fluid={props.image} alt={props.altText} />
  </a>
)

export default function Code({ data }) {
  return (
    <Layout>
      <SEO title="Code" description="Coding projects made by Tim" />
      <Header headerText="Some Dev Projects" />
      <ProjectImg
        image={data.fileName.childImageSharp.fluid}
        alt="Leave Calculator homepage"
        url="http://floating-anchorage-79232.herokuapp.com/"
      />
      <p>
        A rails app that will definitely take 30 seconds to load since no one
        uses it.
      </p>
      <br />
    </Layout>
  )
}

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "images/leave_calculator_large.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
