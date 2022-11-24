import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Now = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <Layout location={location} title={"What I'm doing now"}>
			<div>
				<p>
					This is my now page inspired by <a href="https://sive.rs/now">Derek Sivers</a>,
					answering the question, “What am I doing now?”  I also like how this question can
					also be rhetorical.  
				</p>
				<header>
					<p>
						Updated 24.11.2022
					</p>
				</header>
			</div>
			<div>
				<h2>This blog!</h2>
				<p>
					I’m still tinkering with Gatsby <a href="https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog">gatsby-starter-blog</a>.
					
				</p>
			</div>
			<div>
				<h2>Chen-style Taijiquan</h2>
				<p>
					The path to mastery will be long.
				</p>
			</div>
			<div>
				<h2></h2>
				<p>
				</p>
			</div>
			<div>
				<h2>GrapheneOS</h2>
				<p>
					Continuing my privacy focussed pivot away from the Apple world.
				</p>
			</div>
			<div>
				<h2>Low Oxalate Diet</h2>
				<p>
					The adjustment has been a bit of shock and I’m still working through it, but I wouldn’t have believed the difference.
				</p>
			</div>
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
