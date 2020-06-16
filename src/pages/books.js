import React from "react"
import styled from "styled-components"
import Nav from "../components/nav"
import Header from "../components/header"

const Container = styled.div``

const StyledUl = styled.ul`
  line-height: 1.5rem;
`

const StyledLi = styled.li`
  margin: 0.75rem 0;
`


export default function Books() {
  return (
    <Container>
      <Header headerText="Book List"/>
      <h2>Up Next</h2>
      <StyledUl>
        <StyledLi>Highsmith, Patricia. <a href="https://www.goodreads.com/cs/book/show/52258.The_Price_of_Salt" target="_blank" rel="noreferrer"><i>The Price of Salt</i></a>, 1952.</StyledLi>
      </StyledUl>
      <h2>Some Favorites</h2>
      <StyledUl>
        <StyledLi>Alexander, Michelle. <a href="https://www.goodreads.com/book/show/6792458-the-new-jim-crow" target="_blank" rel="noreferrer"><i>The New Jim Crow: Mass Incarceration in the Age of Colorblindness</i></a>, 2010.</StyledLi>
        <StyledLi>Bryson, Bill. <a href="http://www.goodreads.com/book/show/21.A_Short_History_of_Nearly_Everything" target="_blank" rel="noreferrer"><i>A Short History of Nearly Everything</i></a>, 2003.</StyledLi>
        <StyledLi>Desmond, Matthew. <a href="https://www.goodreads.com/book/show/25852784-evicted" target="_blank" rel="noreferrer"><i>Evicted: Poverty and Profit in the American City</i></a>, 2016.</StyledLi>
        <StyledLi>Franken, Al. <a href="http://www.goodreads.com/book/show/31933250-al-franken-giant-of-the-senate" target="_blank" rel="noreferrer"><i>Al Franken, Giant of the Senate</i></a>, 2017.</StyledLi>
        <StyledLi>Kahneman, Daniel. <a href="https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow" target="_blank" rel="noreferrer"><i>Thinking, Fast and Slow</i></a>, 2011.</StyledLi>
        <StyledLi>Rothstein, Richard. <a href="https://www.goodreads.com/book/show/32191706-the-color-of-law" target="_blank" rel="noreferrer"><i>The Color of Law: A Forgotten History of How Our Government Segregated America</i></a>, 2017.</StyledLi>
        <StyledLi>Russell Hochschild, Arlie. <a href="https://www.goodreads.com/book/show/28695425-strangers-in-their-own-land" target="_blank" rel="noreferrer"><i>Strangers in Their Own Land</i></a>, 2016.</StyledLi>
        <StyledLi>Traister, Rebecca. <a href="https://www.goodreads.com/book/show/39939208-good-and-mad" target="_blank" rel="noreferrer"><i>Good and Mad: The Revolutionary Power of Women's Anger</i></a>, 2018.</StyledLi>
        <StyledLi>Zinn, Howard. <a href="http://www.goodreads.com/book/show/2767.A_People_s_History_of_the_United_States" target="_blank" rel="noreferrer"><i>A People's History of the United States</i></a>, 1980.</StyledLi>
      </StyledUl>
      <h2>Technology</h2>
      <StyledUl>
        <StyledLi>Haverbeke, Marijn. <a href="http://www.goodreads.com/book/show/8910666-eloquent-javascript" target="_blank" rel="noreferrer"><i>Eloquent JavaScript</i></a>, 2010.</StyledLi>
        <StyledLi>Simpson, Kyle. <a href="https://www.goodreads.com/series/139311-you-don-t-know-js" target="_blank" rel="noreferrer"><i>You Don't Know JS Series</i></a>, 2014.</StyledLi>
        <StyledLi>Wachter-Boettcher, Sara. <a href="https://www.goodreads.com/book/show/38212110-technically-wrong" target="_blank" rel="noreferrer"><i>Technically Wrong: Sexist Apps, Biased Algorithms, and Other Threats of Toxic Tech</i></a>, 2017.</StyledLi>
      </StyledUl>
      <Nav />
    </Container>
  )
}
