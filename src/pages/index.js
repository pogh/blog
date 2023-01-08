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
      <h1>
        What you’ll find here
      </h1>
      <p>
        <Link to="/blog-one">blog-one</Link> is my technology focussed blog.
      </p>
      <p>
        <Link to="/blog-two">blog-two</Link> is my online notes for the book I'm going through <span style={{ fontWeight: 'bold' }}>Statistics - An Introduction Using R</span>.
      </p>
      <p>
        <Link to="/blog-three">blog-three</Link> is about clichés I live my life by.  It’s an appreciation of old
        wisdom in the current times.
      </p>
      <h1>
        Regular Donations
      </h1>
      <h2>
        Software
      </h2>
      <p>
        “Think free as in free speech, not free beer.”
      </p>
      <p>
        <ul>
          <li>
            <a href="https://grapheneos.org/">GrapheneOS</a>
          </li>
          <li>
            <a href="https://joplinapp.org">Joplin</a>
          </li>
          <li>
            <a href="https://www.keepassdx.com">KeePassDX</a>
          </li>
          <li>
            <a href="https://keepassxc.org/">KeePassXC</a>
          </li>
          <li>
            <a href="https://signal.org">Signal</a>
          </li>
          <li>
            <a href="https://tasks.org/">Tasks.org</a>
          </li>
        </ul>
        <h2>
          Real World
        </h2>
        <ul>
          <li>
            <a href="https://tierschutz-berlin.de">Tierheim Berlin (Animal Shelter)</a>
          </li>
          <li>
            <a href="https://www.aha-berlin.de">AHA-Berlin e.V.</a>
          </li>
        </ul>
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
