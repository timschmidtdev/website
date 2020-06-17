import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"

export default function Knitting() {
  return (
    <Layout>
      <Header headerText="Knitting"/>
      <p>A place for machine knit designs, patterns, and technical concepts.</p>
      <p>It would be nice to add user login through Google & Twitter so people could add comments.</p>
    </Layout>
  )
}
