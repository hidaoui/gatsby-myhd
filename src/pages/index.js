import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import ProductsArea from '../components/productsArea'
import Jobs from "../components/Jobs"
/*
const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)
*/
const IndexPage = (props) => {
 const jobs = props.data.allJobs.edges;
 const data = props.data;
  
  return (
    <Layout>
    <SEO title="Home" />
    <Jobs items={props.data.allJobs}></Jobs>
    
    {/*}
    <ProductsArea></ProductsArea>
    <div>
      {jobs.map((job, i) => {
        const jobData = job.node;
        return (
          <div key={i}>
            <p>N°: {jobData.jobnumber}</p>
            <p>Titre : {jobData.jobtitle}</p>
            <p>Prix : {jobData.jobprice} &euro;</p>
          </div>
        )
      })}
    </div>

    <div>
        <h1>My Site's Files</h1>
        <table>
          <thead>
            <tr>
              <th>relativePath</th>
              <th>prettySize</th>
              <th>extension</th>
              <th>birthTime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.prettySize}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
            {*/}   

    </Layout>
  );
/*
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
  */

};

export default IndexPage


export const query = graphql`
  query MyQuery {
    allJobs {
      edges {
        node {
          id
          jobnumber
          jobtitle
          jobprice
          product
        }
      }
    },
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`;
