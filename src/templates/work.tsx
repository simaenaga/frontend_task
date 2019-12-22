import * as React from "react";
import { Link, graphql } from "gatsby"
import { library } from '@fortawesome/fontawesome-svg-core'

import Layout from "../components/layout"
import SEO from "../components/seo"
// import { rhythm, scale } from "../utils/typography"
import styled from 'styled-components'
import Image, { FixedObject } from "gatsby-image"
import WorkItem from "../components/WorkItem"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronLeft)

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
  text-align: center;
  display: flex;
  background: #F7F7F7;
  width: 100%;
  height: 660px;
  
  & > a {
    top: 119px;
    position: relative;
    left: 300px; 
  }
`
const Wrapper = styled.div`
  color:#353559;
  line-height: 28px;
  font-family: Roboto;
  padding-top: 75px;

    & > h2 {
      position: absolute;
      width: 1198px;
      height: 28px;
      top: 187px;
      
      margin: 0;
      font-weight: bold;
      font-size: 40px;
      text-align: center;
      font-family: Roboto;
        
    }

    & > p {
      position: absolute;
      width: 1198px;
      height: 26px;
      top: 229px;
      font-weight: 500;
      font-size: 16px;
      text-align: center;
    }
`
const WrapperGoTop = styled(Link)`
  box-shadow: none;
  color: black;
  display: inline-block;
  margin-top: 20px;

  & > svg {
    color: #EF75BE;
    margin-right: 24px;
    margin-left: 31px;
  }

  & > hr {
    margin-top: 20px;
    width: 1200px;
    height: 2px;
  }

`
const StyledWorkContent = styled.div`
    margin-bottom:109px;

    & h3 {
      margin:0 ;
      margin-bottom: 8px;
      font-size: 16px;
      font-family: Roboto;
      color: #ff981a;
      height: 28px;
    }
    & > div {
      margin-top: 27px;
      font-size: 14px;
    }
    & > hr, div { 
      width: 410px;
    }
`
const WorkContent = (props) => {
  return(
    <StyledWorkContent>
      <h3>{props.name}</h3>
      <hr/>
      <div　dangerouslySetInnerHTML={props.html}/>
    </StyledWorkContent>
  )
}
const Top = (props) => {
  return(
  <WrapperGoTop to={props.to} rel={props.top} style={{boxShadow: "none"}}>
    <FontAwesomeIcon icon="chevron-left"/>
    {props.children}
    <hr dangerouslySetInnerHTML={props.html}/>
  </WrapperGoTop>
  )
}

const FlexHeader = styled.header`
  margin-top: 150px;
  display: flex;
  &:first-child {
    margin-left: 30px;
  }

  & .mt30 {
    margin-top:30px;
  }
  
  & > div {
    margin-bottom: 119px;
    margin-right: 28px;
  }
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
        <Top to="/" rel="top">Tamie Taniguchi</Top>
        <Wrapper>
        <h2>WORKS</h2>
        <p>制作実績など</p>
        <article>
          <FlexHeader>
            <div>
              {data.img.childImageSharp && <Image fixed={data.img.childImageSharp.fixed} alt="kari"/>}
              {data.more.childImageSharp &&             
              <Image fixed={data.more.childImageSharp.fixed} alt="kari" className="mt30"/>
              }
            </div>
            
            <div>
              <WorkContent name={work.frontmatter.name} html={{ __html: work.html }}/>
              <WorkContent name="担当" html={{ __html: bic }} />
            </div>
            
          </FlexHeader>
          
        </article>

        
        </Wrapper>
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
        fixed(width: 700) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    more: file(absolutePath: { regex: $moreimgslug } ) {
      childImageSharp {
        fixed(width: 700) {
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
