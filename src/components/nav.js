import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

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

const AtStyle = styled.div`
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="48px" height="48px"><path d="M82.2 90H62V66c0-1.1-0.9-2-2-2H40c-1.1 0-2 0.9-2 2v24H17.8V46.7h-4V92c0 1.1 0.9 2 2 2H40c1.1 0 2-0.9 2-2V68h16v24c0 1.1 0.9 2 2 2h24.2c1.1 0 2-0.9 2-2V46.7h-4V90z"/><path d="M48.7 6.5L2.2 45l2.6 3.1L50 10.6l45.2 37.5 2.6-3.1L51.3 6.5C50.5 5.8 49.5 5.8 48.7 6.5z"/><text y="115" font-size="5px" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif" class="a">  Created by Kuber</text><text y="120" font-size="5px" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif" class="a">  from the Noun Project</text></svg>
        </Link>
        <Link to="/knitting/" getProps={isActive}{...props}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 70" width="48px" height="48px"><path d="M15 58L9.7 58C4.7 58 0.7 54 0.7 49 0.7 48.8 0.7 48.5 0.7 48.3L3.4 16.3C3.8 11.6 7.7 8 12.4 8L15 8 15 4C15 1.8 16.8 0 19 0L31 0C33.2 0 35 1.8 35 4L35 8 37.6 8C42.3 8 46.2 11.6 46.6 16.3L49.3 48.3C49.7 53.2 46 57.6 41.1 58 40.8 58 40.6 58 40.3 58L35 58 35 62C35 64.2 33.2 66 31 66L19 66C16.8 66 15 64.2 15 62L15 58ZM34.8 56L40.3 56C40.5 56 40.7 56 40.9 56 42.7 55.8 44.3 55 45.5 53.7 30.4 45 22.9 40.6 22.9 40.6L16.3 44.7 34.8 56ZM31 56L22.7 50.9 14.5 56 31 56ZM10.7 56L20.8 49.7 14.4 45.9 3.7 52.5C4.9 54.6 7.1 56 9.7 56L10.7 56ZM24.8 39.4L46.6 52C47.1 51 47.4 49.7 47.3 48.4L47 44.6 31.2 35.3C31.1 35.4 31 35.5 30.9 35.6L24.8 39.4ZM16.7 24.6L46.8 42.1 46.1 33.6 22.7 20.9 16.7 24.6ZM2.9 50.7L29.3 34.2 23.2 30.7 3.2 42.9 2.7 48.4C2.7 48.6 2.7 48.8 2.7 49 2.7 49.6 2.8 50.1 2.9 50.7ZM21.3 29.5L14.9 25.8C14.9 25.8 14.8 25.8 14.8 25.7L4.1 32.3 3.4 40.4 21.3 29.5ZM24.7 19.7L45.9 31.3 45.2 23.2 31 15.9C31 15.9 31 15.8 30.9 15.8L24.7 19.7ZM45 20.9L44.6 16.4C44.4 13.6 42.4 11.2 39.8 10.4L32.9 14.6 45 20.9ZM4.3 29.8L36.6 10 25.6 10 4.9 22.4 4.3 29.8ZM5.1 20L21.7 10 12.4 10C8.7 10 5.7 12.8 5.4 16.4L5.1 20ZM33 4C33 2.9 32.1 2 31 2L19 2C17.9 2 17 2.9 17 4L17 8 33 8 33 4ZM17 62C17 63.1 17.9 64 19 64L31 64C32.1 64 33 63.1 33 62L33 58 17 58 17 62Z"/><text y="81" font-size="5px" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif" class="a">  Created by Andrejs Kirma</text><text y="86" font-size="5px" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif" class="a">  from the Noun Project</text></svg>
        </Link>
        <Link to="/books/" getProps={isActive}{...props}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="20 20 60 60" width="48px" height="48px"><path d="M50.11,73.23a2.93,2.93,0,0,1-2-.81c-1.76-1.69-7-5.67-18.08-6.21a4.18,4.18,0,0,1-4-4.16V31.3a4.33,4.33,0,0,1,.87-2.69A4.17,4.17,0,0,1,30.18,27h0c12,0,18.19,5.26,20.3,7.5a3.73,3.73,0,0,1,1,2.54V60.61a1.5,1.5,0,0,1-1.5,1.5h0a1.5,1.5,0,0,1-1.5-1.5V37a.68.68,0,0,0-.2-.49C46.86,35,41.3,30,30.19,30h0a1.19,1.19,0,0,0-.85.35,1.11,1.11,0,0,0-.33.79V62.05a1.19,1.19,0,0,0,1.15,1.17c12,.58,18,5.11,20,7,2.17-1.79,8.63-6,19.74-7A1.17,1.17,0,0,0,71,62.13V31a1.23,1.23,0,0,0-1.16-1.18,24.49,24.49,0,0,0-13.41,3.45.49.49,0,0,1-.67-.17l-1-1.72a.48.48,0,0,1,.17-.68A27.44,27.44,0,0,1,70,26.8,4.25,4.25,0,0,1,74,31V62.13a4.21,4.21,0,0,1-3.86,4.16C59.85,67.13,54,71,51.93,72.6A2.92,2.92,0,0,1,50.11,73.23Z"/><text x="0" y="115" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by Christian Jackson</text><text x="0" y="120" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>
        </Link>
        <Link to="/code/" getProps={isActive}{...props}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 80 80" width="48px" height="48px"><title>54</title><g data-name="Group"><path data-name="Path" d="M42.4,23.6a2,2,0,0,0-2.8,0l-25,25a2,2,0,0,0,0,2.8l25,25a2,2,0,0,0,2.8-2.8L18.8,50,42.4,26.4A2,2,0,0,0,42.4,23.6Z"/><path data-name="Path" d="M57.6,76.4a2,2,0,0,0,2.8,0l25-25a2,2,0,0,0,0-2.8l-25-25a2,2,0,0,0-2.8,2.8L81.2,50,57.6,73.6A2,2,0,0,0,57.6,76.4Z"/></g><text x="0" y="115" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by rajakumara</text><text x="0" y="120" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>
        </Link>
        <Link to="/contact/" getProps={isActive}{...props}><AtStyle>@</AtStyle></Link>
      </NavItems>
    </NavContainer>
  )
}
