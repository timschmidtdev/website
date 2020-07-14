import React from "react"
import styled from "styled-components"

const StyledHeader = styled.h1`
  margin-bottom: 3rem;
  text-align: center;
`

const Header = props => <StyledHeader>{props.headerText}</StyledHeader>

export default Header
