import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Home = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <Layout location={location} title={siteTitle}>
            <p>
                Welcome.  This is my corner of the internet built with <a href="https://www.gatsbyjs.com">Gatsby</a> using 
                continuous deployment a Git-triggered build to an Azure Static Web App.
            </p>
            <p>
                <Link to="/blog-one">blog-one</Link> is my technology focussed blog.  
            </p>
            <p>
                <Link to="/blog-two">blog-two</Link> is my online notes for the book I'm going through
                <span style={{ fontWeight: 'bold' }}>Statistics - An Introduction Using R</span>.  
            </p>
            <p>
                <Link to="/blog-three">blog-three</Link> is about clichés I live my life by.  It’s an appreciation of old
                wisdom in the current times.
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
