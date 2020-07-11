import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const ProjectListContainer = styled.div`
  margin-bottom: 4rem;
`

const ProjectContainer = styled.div`
  margin-bottom: 4rem;
`

const ProjectContainerLink = styled.a``

const ImageConatiner = styled.div`
  max-width: 35rem;
`

const StyledImg = styled(Img)`
  min-width: 100%;
  height: 10rem;
  border-radius: 0.2rem;
`

const CodeList = ({ data }) => {
  return (
    <ProjectListContainer>
      {data.allContentfulProject.edges.map(project => {
        const url = `/${project.node.title.toLowerCase().split(" ").join("-")}`
        return (
          <ProjectContainer>
            <ProjectContainerLink href={url}>
              <ImageConatiner>
                <StyledImg
                  alt={project.node.titleImage.title}
                  fluid={project.node.titleImage.fluid}
                />
              </ImageConatiner>
              <h2>{project.node.title}</h2>
              <p>{project.node.subTitle}</p>
            </ProjectContainerLink>
          </ProjectContainer>
        )
      })}
    </ProjectListContainer>
  )
}

export default CodeList
