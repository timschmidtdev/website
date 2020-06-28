import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const ProjectContainer = styled.div`
  margin-bottom: 4rem;
`

const ImageConatiner = styled.div`
  max-width: 35rem;
`

const StyledImg = styled(Img)`
  border-radius: 0.15rem;
`

export default function Project(props) {
  return (
    <ProjectContainer>
      <ImageConatiner>
        <a href={props.url} target="_blank" rel="noreferrer">
          <StyledImg fluid={props.image} alt={props.altText} />
        </a>
      </ImageConatiner>
      <p>{props.description}</p>
      <a href={props.repo} target="_blank" rel="noreferrer">
        &lt; &gt; Repo
      </a>
    </ProjectContainer>
  )
}
