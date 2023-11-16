import * as React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout>
            <p>404: Not Found – Sorry about that.</p>
            <footer>
                <Bio />
            </footer>
        </Layout>
    )
}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
