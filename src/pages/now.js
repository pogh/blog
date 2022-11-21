import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Now = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <Layout location={location} title={"What I'm doing now"}>
            <p>
                This is my now page inspired by <a href="https://sive.rs/now">Derek Sivers</a>,
                answering the question, “What am I doing now?”  I also like how this question can
                also be rhetorical.  
            </p>
            <footer>
                <Bio />
            </footer>
        </Layout>
    )
}

export default Now


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
