import * as React from "react";
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import { rhythm, scale } from "../utils/typography"
import styled from 'styled-components'
import Image, { FixedObject } from "gatsby-image"
import WorkItem from "../components/WorkItem"

const Title = styled.h1`
`

const Border = styled.hr`
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
    },
    prevImg: {
      childImageSharp: {
        fixed
      }
    },
    nextImg: {
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

const Nav = styled.nav`
  position: relative;
  left: 300px; 
  text-align: center;
  display: flex;
`
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
            <div dangerouslySetInnerHTML={{ __html: work.html }} />

            <div dangerouslySetInnerHTML={{ __html: bic }} />
          </header>
          <Border />
        </article>

        <Nav>
          

          {previous && (
            <WorkItem 
              rel="prev"
              to={previous.fields.slug}
              fixed={data.prevImg.childImageSharp.fixed}
              alt="top"
              name={previous.frontmatter.name}
              discription="design, coding/javascript, etc."
                />
          )}

          {next && (
            <WorkItem 
              rel="next"
              to={next.fields.slug}
              fixed={data.nextImg.childImageSharp.fixed}
              alt="top"
              name={next.frontmatter.name}
              discription="design, coding/javascript, etc."
            />
          )}

        </Nav>
      </Layout>
    )
  }
}

export default WorkTemplate

export const pageQuery = graphql`
  query WorkPostBySlug($slug: String!, $bic: String!, $imgslug: String!, $moreimgslug: String!, $prevslug: String!, $nextslug: String!) {
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
    prevImg: file(absolutePath: { regex: $prevslug } ) {
      childImageSharp {
        fixed(width: 275, height: 275) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    nextImg: file(absolutePath: { regex: $nextslug } ) {
      childImageSharp {
        fixed(width: 275, height: 275) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
