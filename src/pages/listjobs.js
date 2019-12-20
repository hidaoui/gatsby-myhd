import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DtJobs from "../components/datatables/DtJobs"


const ListjobsPage = () => (
  <Layout>
    <SEO title="Liste des commandes" />
    <h1>Liste des dossiers</h1>
    <DtJobs></DtJobs>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ListjobsPage
