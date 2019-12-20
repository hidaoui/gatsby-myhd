import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/Contact"


const ContactPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Contact form</h1>
    <Contact></Contact>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage
