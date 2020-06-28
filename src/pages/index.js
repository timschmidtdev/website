import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

export default function Home() {
  return (
    <Layout>
      <SEO
        title="Home"
        description="Home page for Tim Schmidt's personal website"
      />
      <Header headerText="Tim Schmidt" />
      <p>Hi! I'm Tim.</p>
      <p>I'm a developer.</p>
      <p>
        I also like machine knitting, cycling, running, and cross country
        skiing.
      </p>
    </Layout>
  )
}
