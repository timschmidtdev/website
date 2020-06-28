import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Project from "../components/project"
import SEO from "../components/seo"

export default function Code({ data }) {
  return (
    <Layout>
      <SEO title="Code" description="Coding projects made by Tim" />
      <Header headerText="Some Dev Projects" />
      <Project
        alt="Leave Calculator homepage"
        description="A rails app that will definitely take 30 seconds to load since no one uses it."
        image={data.fileName.childImageSharp.fluid}
        url="http://floating-anchorage-79232.herokuapp.com/"
        repo="https://github.com/timschmidtdev/rails_leave_calculator"
      />
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
