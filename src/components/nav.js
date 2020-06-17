import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Home from "../assets/icons/home.svg"
import Yarn from "../assets/icons/yarn.svg"
import Book from "../assets/icons/book.svg"
import Code from "../assets/icons/code.svg"

const NavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  padding: 1rem 0;
  left: 0;
  width: 100%;
  background-color: #0f1a30;
`

const NavItems = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 40rem;
  margin: 0 auto;
`

const AtDiv = styled.div`
  font-size: 2.2rem;
  line-height: 1.15;
`

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "active" } : {}
}

export default function Nav(props) {
  return (
    <NavContainer>
      <NavItems>
        <Link to="/" getProps={isActive}{...props}>
          <Home/>
        </Link>
        <Link to="/knitting/" getProps={isActive}{...props}>
          <Yarn/>
        </Link>
        <Link to="/books/" getProps={isActive}{...props}>
          <Book/>
        </Link>
        <Link to="/code/" getProps={isActive}{...props}>
          <Code/>
        </Link>
        <Link to="/contact/" getProps={isActive}{...props}>
          <AtDiv>@</AtDiv>
        </Link>
      </NavItems>
    </NavContainer>
  )
}
