import * as React from "react";
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import { rhythm, scale } from "../utils/typography"
import styled from 'styled-components'
const Title = styled.h1`
`

const Border = styled.hr`
`
const BlogWrapper = styled.ul`
`

interface WorkTemplateProps {
  data: {
    work: {
      frontmatter: {
        name: string
      }
      html: string
    },
    site: {
      siteMetadata: {
        title: string
      }
    },
    bic: {
      html:string
    }
  },
  pageContext: {
    previous: { 
      fields: { slug: string },
      frontmatter: { name: string }
    },
    next: {
      fields: { slug: string },
      frontmatter: { name: string }
    },
    bic: string,
    slug: string
  }
}

class WorkTemplate extends React.Component<WorkTemplateProps> {
  render() {
    const b = this.props.pageContext.bic
    const work = this.props.data.work
    const { previous, next } = this.props.pageContext
    const bic = this.props.data.bic.html
    
    return (
      <Layout>
        <SEO
          title={work.frontmatter.name}
          description={work.html}
        />
        <article>
          <header>
            <Title>
              {work.frontmatter.name}
            </Title>
            {work.html}
            {bic}{b}
          </header>
          <Border />
          {this.props.pageContext.slug}
        </article>

        <nav>
          <BlogWrapper>
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  {previous.frontmatter.name}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.name}
                </Link>
              )}
            </li>
          </BlogWrapper>
        </nav>
      </Layout>
    )
  }
}

export default WorkTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $bic: String!) {
    site {
      siteMetadata {
        title
      }
    }
    work: markdownRemark(fields: { slug: { regex: $slug } }) {
      frontmatter {
        name
      }
      html
    }
    bic: markdownRemark(fields: { slug: { regex: $bic } }) {
      html
    }
  }
`
