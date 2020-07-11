import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProjectImg = styled(Img)`
  width: 100%;
  height: 12rem;
  border-radius: 0.2rem;
  @media (min-width: 45rem) {
    width: 30rem;
    margin-bottom: 2rem;
  }
`

const Body = styled.div`
  a {
    color: #faa307;
    &:hover {
      color: #e85d04;
    }
    &:active {
      color: #faa307;
    }
  }
`

export default function CodeProject({ data }) {
  const project = data.contentfulProject
  console.log(project)
  return (
    <Layout>
      <TitleContainer>
        <ProjectImg
          alt={project.titleImage.title}
          fluid={project.titleImage.fluid}
        />
        <h1>{project.title}</h1>
      </TitleContainer>
      <Body
        className="project-content"
        dangerouslySetInnerHTML={{
          __html: project.body.childMarkdownRemark.html,
        }}
      />
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    contentfulProject(id: { eq: $id }) {
      id
      title
      subTitle
      body {
        childMarkdownRemark {
          html
        }
      }
      titleImage {
        title
        fluid(quality: 10) {
          base64
          srcWebp
          srcSetWebp
        }
      }
    }
  }
`
