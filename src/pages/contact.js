import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import Social from "../components/social"
import ContactForm from "../components/contactForm"

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact" description="Contact Tim through social media or complete the form"/>
      <Header headerText="@timschmidtdev"/>
      <Social/>
      <ContactForm/>
    </Layout>
  )
}
