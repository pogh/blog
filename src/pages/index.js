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
                Welcome.  This is my corner of the internet build with gatsby.
            </p>
            <p>
                This is a link to &nbsp;
                <Link to="/blog-one">blog-one</Link>
            </p>
            <p>
                This is a link to &nbsp;
                <Link to="/blog-two">blog-two</Link>
            </p>
            <p>
                This is a link to &nbsp;
                <Link to="/blog-three">blog-three</Link>
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
