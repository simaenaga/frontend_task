import * as React from "react";
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import { rhythm, scale } from "../utils/typography"
import styled from 'styled-components'
import Image, { FixedObject } from "gatsby-image"

const Title = styled.h1`
`

const Border = styled.hr`
`
const WorksWrapper = styled.ul`
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
    },
    img: {
      childImageSharp: {
        fixed
      }
    },
    more: {
      childImageSharp: {
        fixed
      }
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
    }
  }
}

class WorkTemplate extends React.Component<WorkTemplateProps> {
  render() {
    const work = this.props.data.work
    const { previous, next } = this.props.pageContext
    const bic = this.props.data.bic.html
    const data = this.props.data
    console.log(this.props)
    
    return (
      <Layout>
        <SEO
          title={work.frontmatter.name}
          description={work.html}
        />
        <Link to="/" rel="top">Tamie Taniguchi</Link>
        <article>
          <header>
            <Title>
              {work.frontmatter.name}
            </Title>
            {data.img.childImageSharp && <Image fixed={data.img.childImageSharp.fixed} alt="kari"/>}
            {data.more.childImageSharp &&             
            <Image fixed={data.more.childImageSharp.fixed} alt="kari"/>
            }
            {work.html}
            {bic}
          </header>
          <Border />
        </article>

        <nav>
          <WorksWrapper>
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
          </WorksWrapper>
        </nav>
      </Layout>
    )
  }
}

export default WorkTemplate

export const pageQuery = graphql`
  query WorkPostBySlug($slug: String!, $bic: String!, $imgslug: String!, $moreimgslug: String!) {
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
    img: file(absolutePath: { regex: $imgslug } ) {
      childImageSharp {
        fixed(width: 275, height: 275) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    more: file(absolutePath: { regex: $moreimgslug } ) {
      childImageSharp {
        fixed(width: 275, height: 275) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
