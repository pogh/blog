import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"

const BlogIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const posts = data.allMarkdownRemark.nodes

    return (
        <Layout location={location} title={"blog-one"}>
            <p>
                This is not another blog explaining how I worked though the example on 
                MSDN (now the all new improved Microsoft Learn&trade;&hellip;), but
                on-line notes for me.
            </p>
            <Bio />
            <ol style={{ listStyle: `none` }}>
                {posts.map(post => {
                    const title = post.frontmatter.title || post.fields.slug

                    return (
                        <li key={post.fields.slug}>
                            <article
                                className="post-list-item"
                                itemScope
                                itemType="http://schema.org/Article"
                            >
                                <header>
                                    <h2>
                                        <Link to={post.fields.slug} itemProp="url">
                                            <span itemProp="headline">{title}</span>
                                        </Link>
                                    </h2>
                                    <small>{post.frontmatter.date}</small>
                                </header>
                                <section>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: post.frontmatter.description || post.excerpt,
                                        }}
                                        itemProp="description"
                                    />
                                </section>
                            </article>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: {fields: {slug: {regex: "/^\\/blog-one\\/.+\\/$/"}}},
      sort: { fields: [frontmatter___date], order: DESC }
      ){
        nodes {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
  }
`
