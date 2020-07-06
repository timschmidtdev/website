import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Home from "../assets/icons/home.svg"
import Yarn from "../assets/icons/yarn.svg"
import Book from "../assets/icons/book.svg"
import Code from "../assets/icons/code.svg"

const NavContainer = styled.nav`
  background-color: #0f1a30;
  bottom: 0;
  left: 0;
  padding: 1rem 0;
  position: fixed;
  width: 100%;
`

const NavItems = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  max-width: 40rem;
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
        <Link to="/" title="Home" getProps={isActive} {...props}>
          <Home />
        </Link>
        <Link to="/blog/" title="Blog" getProps={isActive} {...props}>
          <Yarn />
        </Link>
        <Link to="/books/" title="Books" getProps={isActive} {...props}>
          <Book />
        </Link>
        <Link to="/code/" title="Dev Projects" getProps={isActive} {...props}>
          <Code />
        </Link>
        <Link to="/contact/" title="Contact" getProps={isActive} {...props}>
          <AtDiv>@</AtDiv>
        </Link>
      </NavItems>
    </NavContainer>
  )
}
