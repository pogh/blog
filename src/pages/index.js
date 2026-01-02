import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <p>
        Welcome.  This is my corner of the internet built with <a href="https://www.gatsbyjs.com">Gatsby</a> using a
        continuous deployment Git-triggered build to an Azure Static Web App.
      </p>
      <footer>
        <Bio />
      </footer>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
