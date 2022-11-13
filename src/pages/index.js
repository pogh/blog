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
                Welcome
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
