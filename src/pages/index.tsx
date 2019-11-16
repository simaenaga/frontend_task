import * as React from "react";
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import styled from 'styled-components'

interface Edge {
  node:{
    frontmatter: {
      title: string,
      date: Date,
      description: string
    },
    fields: {
      slug: string
    },
    excerpt: string
  }
}
interface BlogIndexProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    },
    allMarkdownRemark: {
      edges: Edge[]
    },
    top: {
      childImageSharp: {
        fixed
      }
    }
  },
  location: Location
}

const Blogtitle = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`
const Bloglink = styled(Link)`
  box-shadow: none;
`


class BlogIndex extends React.Component<BlogIndexProps> {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <div>
      <Layout　img={data.top.childImageSharp.fixed} alt="top">
        <SEO title="All posts" />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <Blogtitle>
                  <Bloglink to={node.fields.slug}>
                    {title}
                  </Bloglink>
                </Blogtitle>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
      </Layout>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
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
    top: file(absolutePath: { regex: "/top.jpg/" }) {
      childImageSharp {
        fixed(width: 1200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
