import * as React from "react";
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import styled from 'styled-components'

interface BlogPostTemplateProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string,
        description: string,
        date: string
      },
      excerpt: string,
      html: string
    },
    site: {
      siteMetadata: {
        title: string
      }
    }
  },
  pageContext: {
    previous: { 
      fields: { slug: string },
      frontmatter: { title: string }
    },
    next: {
      fields: { slug: string },
      frontmatter: { title: string }
    }
  },
  location: Location
}
const Title = styled.h1`
  margin-top: ${rhythm(1)};
  margin-bottom: 0;
`
// ${...scale(-1 / 5)}
const Date = styled.p`
  display: block;
  margin-bottom: ${rhythm(1)};
`
const Border = styled.hr`
  margin-bottom: ${rhythm(1)};
`
const BlogWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`
class BlogPostTemplate extends React.Component<BlogPostTemplateProps> {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <Title>
              {post.frontmatter.title}
            </Title>
            <Date>
              {post.frontmatter.date}
            </Date>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <Border />
          <footer>
            <Bio />
          </footer>
        </article>

        <nav>
          <BlogWrapper>
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </BlogWrapper>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
