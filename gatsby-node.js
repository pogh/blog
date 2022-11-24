const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: [
                  { fields: { slug: ASC } }, 
                  { frontmatter: { date: DESC } }
                ]
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      var previousPostId
      var nextPostId

      var thisPost
      var path
      var indexOfFirst

      // Get the root folder of the current node
      thisPost = post
      path = thisPost.fields.slug
      indexOfFirst = path.indexOf('/', 1);
      var currentPathRoot = path.substring(1, indexOfFirst)
      
      console.log('----------------')
      console.log('currentPathRoot:' + currentPathRoot)

      // If the previous post is in the same root folder link to it
      if (posts[index - 1] != null) {

        thisPost = posts[index - 1]
        path = thisPost.fields.slug
        indexOfFirst = path.indexOf('/', 1)
        var previousPathRoot = path.substring(1, indexOfFirst)
        console.log('previousPathRoot:' + previousPathRoot)

        if (currentPathRoot == previousPathRoot) {
          previousPostId = index === 0 ? null : thisPost.id
        }
        else {
          previousPostId = null
        }
      }

      // If the next post is in the same root folder link to it
      if (posts[index + 1] != null) {

        thisPost = posts[index + 1]
        path = thisPost.fields.slug
        indexOfFirst = path.indexOf('/', 1)
        var nextPathRoot = path.substring(1, indexOfFirst)
        console.log('nextPathRoot:' + nextPathRoot)

        if (currentPathRoot == nextPathRoot) {
          nextPostId = index === posts.length - 1 ? null : thisPost.id
        }
        else {
          nextPostId = null
        }
      }

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
