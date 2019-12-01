const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const work = path.resolve(`./src/templates/work.tsx`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          limit: 1000
          filter: {
            fileAbsolutePath: {regex: "/main/"}
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                name
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // create Work
  const works = result.data.allMarkdownRemark.edges

  works.forEach((w, index) => {
    const previous = index === works.length - 1 ? works[0].node : works[index + 1].node
    const next = index === 0 ? works[works.length - 1].node : works[index - 1].node
    const bic = w.node.fields.slug.slice(0, -5) + "be_in_charge/"
    console.log(bic)
    createPage({
      path: w.node.fields.slug,
      component: work,
      context: {
        slug: w.node.fields.slug,
        bic: bic,
        previous,
        next,
      },
    })
  })
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
