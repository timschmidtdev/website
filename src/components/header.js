import React from "react"
import styled from "styled-components"

const StyledHeader = styled.h1`
  margin-bottom: 3rem;
`

export default function Header(props) {
  return <StyledHeader>{props.headerText}</StyledHeader>
}
