import * as React from "react";
import { Link, graphql } from "gatsby"

import SelfIntro from "../components/selfIntro"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import styled from 'styled-components'

// interface Edge {
//   node{
//     frontmatter: {
//       title: string,
//       date: Date,
//       description: string
//     },
//     fields: {
//       slug: string
//     },
//     excerpt: string
//   }
// }
interface SelfIntroType {
  node: {
    frontmatter: {
      name: string,
      job: string,
      sex: string,
      birth_date: string,
      address: string
    },
    html: HTMLElement
  }
}
interface BlogIndexProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    },
    // allMarkdownRemark: {
    //   edges: Edge[]
    // },
    selfIntro: {
      edges: SelfIntroType[]
    },
    top: {
      childImageSharp: {
        fixed
      }
    },
    pro: {
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
  color: #ff981a;
  /* text-decoration: none; */
`


class BlogIndex extends React.Component<BlogIndexProps> {
  render() {
    const { data } = this.props
    // const siteTitle = data.site.siteMetadata.title
    // const posts = data.allMarkdownRemark.edges

    return (
      <div>
      <Layout>
        <SelfIntro
          top={data.top.childImageSharp.fixed}
          pro={data.pro.childImageSharp.fixed}
          selfIntro={data.selfIntro.edges}
        />
        <SEO title="All posts" />
        {/* {posts.map(({ node }) => {
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
        })} */}
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
    blog: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/activity/blog/"}
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
          }
        }
      }
    }
    selfIntro: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/self-intoroduce/"}
      }
    ) {
      edges {
        node {
          frontmatter {
            name
            job
            sex
            birth_date
            address
          }
          html
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
    pro: file(absolutePath: { regex: "/profile.jpg/" }) {
      childImageSharp {
        fixed(width: 128, height: 128) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
