import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const StyledUl = styled.ul`
  line-height: 1.5rem;
`

const StyledLi = styled.li`
  margin: 0.75rem 0;
`

const Book = props => (
  <StyledLi>
    <a href={props.url} target="_blank" rel="noreferrer">
      <i>{props.title}</i>
      <br />
      {props.author}
      <br />
      {props.year}
    </a>
  </StyledLi>
)

const Books = () => {
  return (
    <Layout>
      <SEO title="Books" description="Books recommended by Tim" />
      <Header headerText="Book List" />
      <h2>Up Next</h2>
      <StyledUl>
        <Book
          author="Ta-Nehisi Coates"
          url="https://www.goodreads.com/book/show/33916061-we-were-eight-years-in-power"
          title="We Were Eight Years in Power: An American Tragedy"
          year="2017"
        />
        <Book
          author="Eboo Patel"
          url="https://www.goodreads.com/book/show/797385.Acts_of_Faith"
          title="Acts of Faith: The Story of an American Muslim, the Struggle for the Soul of a Generation"
          year="2007"
        />
      </StyledUl>
      <h2>Some Favorites</h2>
      <StyledUl>
        <Book
          author="Michelle Alexander"
          url="https://www.goodreads.com/book/show/6792458-the-new-jim-crow"
          title="The New Jim Crow: Mass Incarceration in the Age of Colorblindness"
          year="2010"
        />
        <Book
          author="Bill Bryson"
          url="http://www.goodreads.com/book/show/21.A_Short_History_of_Nearly_Everything"
          title="A Short History of Nearly Everything"
          year="2003"
        />
        <Book
          author="Matthew Desmond"
          url="https://www.goodreads.com/book/show/25852784-evicted"
          title="Evicted: Poverty and Profit in the American City"
          year="2016"
        />
        <Book
          author="Al Franken"
          url="http://www.goodreads.com/book/show/31933250-al-franken-giant-of-the-senate"
          title="Al Franken, Giant of the Senate"
          year="2017"
        />
        <Book
          author="Patricia Highsmith"
          url="https://www.goodreads.com/cs/book/show/52258.The_Price_of_Salt"
          title="The Price of Salt"
          year="1952"
        />
        <Book
          author="Daniel Kahneman"
          url="https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow"
          title="Thinking, Fast and Slow"
          year="2011"
        />
        <Book
          author="Richard Rothstein"
          url="https://www.goodreads.com/book/show/32191706-the-color-of-law"
          title="The Color of Law: A Forgotten History of How Our Government Segregated America"
          year="2017"
        />
        <Book
          author="Arlie Russell Hochschild"
          url="https://www.goodreads.com/book/show/28695425-strangers-in-their-own-land"
          title="Strangers in Their Own Land"
          year="2016"
        />
        <Book
          author="Rebecca Traister"
          url="https://www.goodreads.com/book/show/39939208-good-and-mad"
          title="Good and Mad: The Revolutionary Power of Women's Anger"
          year="2018"
        />
        <Book
          author="Howard Zinn"
          url="http://www.goodreads.com/book/show/2767.A_People_s_History_of_the_United_States"
          title="A People's History of the United States"
          year="1980"
        />
      </StyledUl>
      <h2>Technology</h2>
      <StyledUl>
        <Book
          author="Marijn Haverbeke"
          url="http://www.goodreads.com/book/show/8910666-eloquent-javascript"
          title="Eloquent JavaScript"
          year="2010"
        />
        <Book
          author="Kyle Simpson"
          url="https://www.goodreads.com/series/139311-you-don-t-know-js"
          title="You Don't Know JS Series"
          year="2014"
        />
        <Book
          author="Sara Wachter-Boettcher"
          url="https://www.goodreads.com/book/show/38212110-technically-wrong"
          title="Technically Wrong: Sexist Apps, Biased Algorithms, and Other Threats of Toxic Tech"
          year="2017"
        />
      </StyledUl>
    </Layout>
  )
}

export default Books
