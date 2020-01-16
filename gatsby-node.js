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
    const prevslug = "/assets" + previous.fields.slug.slice(0, -5)
    const next = index === 0 ? works[works.length - 1].node : works[index - 1].node
    const nextslug = "/assets" + next.fields.slug.slice(0, -5)
    
    const bic = w.node.fields.slug.slice(0, -5) + "be_in_charge/"
    let moreimgslug = "";
    let imgslug = "/assets" + w.node.fields.slug.slice(0, -5)
    let flag = false;

    if(w.node.fields.slug.slice(0, -5)==="/zemi/" && flag === false){
      flag = true;
      imgslug = "/zemi1/"
    }
    if(w.node.fields.slug.slice(0, -5)==="/zemi/" && flag === true){
      moreimgslug = "/zemi2/"
    }

    createPage({
      path: w.node.fields.slug,
      component: work,
      context: {
        slug: w.node.fields.slug,
        bic: bic,
        previous,
        next,
        imgslug,
        moreimgslug,
        prevslug,
        nextslug
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
