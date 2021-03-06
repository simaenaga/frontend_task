import * as React from "react";
import { Link, graphql } from "gatsby"

import SelfIntro from "../components/selfIntro"
import Detail from "../components/Detail"
import Work from "../components/Work"
import Activity from "../components/Activity"
import Sns from "../components/Sns"
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
      address: string,
      name_and_frigana: string
    },
    html: string
  }
}
interface EducationType {
  node: {
    frontmatter:{
      now: string,
      now_name: string,
      pre_one: string,
      pre_one_name: string
    }
  }
}
interface ExperienceType {
  node: {
      frontmatter:{
      now: string,
      name: string,
      description: string
    }
  }
}

interface SkillType {
  node:{
      frontmatter:{
      JS: number,
      JS_description: string,
      HTML_and_CSS: number,
      HC_description: string,
      Java: number,
      Java_description: string,
      Ruby: number,
      Ruby_description: string,
      React_Redux: number,
      RR_description: string,
      Unity: number,
      Unity_description: string
    }
  }
}

interface PQType {
  node: {
    frontmatter: {
      item1: string,
      item1_per: number,
      item2:string,
      item2_per: number,
      item3:string,
      item3_per: number,
      item4:string,
      item4_per: number,
      item5:string,
      item5_per: number,
    },
    html: string
  }
}
interface BlogType {
  node: {frontmatter:{
    title: string,
    date: Date
  }}
}

interface InterestType {
  node: {frontmatter:{
    name: string,
    description1: string,
    description2: string
  }}
}
interface Wr{
  node: {fields: { slug:string },
        frontmatter: {
          name: string
        }}
}
interface BlogIndexProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    },
    work?: {edges:Wr[]},
    selfIntro: {
      edges: SelfIntroType[]
    },

    interests: { edges: InterestType[]},
    blog: { edges: BlogType[]},

    education: { edges: EducationType[] },
    experience: { edges: ExperienceType[]},
    skill: { edges: SkillType[]},
    pq: { edges: PQType[]},
    top: {
      childImageSharp: {
        fixed
      }
    },
    pro: {
      childImageSharp: {
        fixed
      }
    },
    hp: {
      childImageSharp: {
        fixed
      }
    },
    electron: {
      childImageSharp: {
        fixed
      }
    },
    zemi: {
      childImageSharp: {
        fixed
      }
    },
    radio: {
      childImageSharp: {
        fixed
      }
    },
    pen: {
      childImageSharp: {
        fixed
      }
    },
    book: {
      childImageSharp: {
        fixed
      }
    },
  },
  location: Location
}


class BlogIndex extends React.Component<BlogIndexProps> {
  render() {
    const { data } = this.props
    // const siteTitle = data.site.siteMetadata.title
    // const posts = data.allMarkdownRemark.edges
    console.log(data)
    return (
      <div>
      <Layout>
        <SelfIntro
          top={data.top.childImageSharp.fixed}
          pro={data.pro.childImageSharp.fixed}
          selfIntro={data.selfIntro.edges}
        />
        <SEO/>
        <Work work={data.work} name={data.selfIntro.edges[0].node.frontmatter.name} hp={data.hp} electron={data.electron} zemi={data.zemi}/>
        <Detail experience={data.experience.edges[0]} education={data.education.edges[0]} skill={data.skill.edges[0]} pq={data.pq.edges[0]}/>
        <Activity
          blog={data.blog} 
          interests={data.interests} 
          pen={data.pen.childImageSharp.fixed} 
          book={data.book.childImageSharp.fixed} 
          radio={data.radio.childImageSharp.fixed}
        />
        <Sns />
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
    work: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/main/"}
      }
    )  {
    edges {
      node {
        frontmatter {
          name
        }
        fields {
          slug
        }
      }
    }
  }
  
    blog: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/activity/blog/"}
      }
      sort: {
        fields: [frontmatter___date]
        order: DESC
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
            name_and_frigana
          }
          html
        }
      }
    }
    education: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/education.md/"}
      }
    ) {
      edges {
        node {
          frontmatter {
            now
            now_name
            pre_one
            pre_one_name
          }
        }
      }
    }
    experience: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/experience.md/"}
      }
    ) {
      edges {
        node {
          frontmatter {
            now
            name
            description
          }
        }
      }
    }
    pq: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/personal_qualities.md/"}
      }
    ) {
      edges {
        node {
          frontmatter {
            item1
            item1_per
            item2
            item2_per
            item3
            item3_per
            item4
            item4_per
            item5
            item5_per
          }
          html
        }
      }
    }
    skill:  allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/skill.md/"}
      }
    ) {
      edges {
        node {
          frontmatter {
            JS
            JS_description
            HTML_and_CSS
            HC_description
            Java
            Java_description
            Ruby
            Ruby_description
            React_Redux
            RR_description
            Unity
            Unity_description
          }
        }
      }
    }
    interests:  allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/activity/interests/"}
      }
    ) {
      edges {
        node {
          frontmatter {
            name
            description1
            description2
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
    pro: file(absolutePath: { regex: "/profile.jpg/" }) {
      childImageSharp {
        fixed(width: 128, height: 128) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    hp: file(absolutePath: { regex: "/assets/homepage/" }) {
      childImageSharp {
        fixed(width: 275, height: 275) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    electron: file(absolutePath: { regex: "/assets/electron/" }) {
      childImageSharp {
        fixed(width: 275, height: 275) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    zemi: file(absolutePath: { regex: "/assets/zemi/" }) {
      childImageSharp {
        fixed(width: 275, height: 275) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    pen: file(absolutePath: { regex: "/assets/interests/pen/" }) {
      childImageSharp {
        fixed(width: 128, height: 128) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    book: file(absolutePath: { regex: "/assets/interests/book/" }) {
      childImageSharp {
        fixed(width: 128, height: 128) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    radio: file(absolutePath: { regex: "/assets/interests/radio/" }) {
      childImageSharp {
        fixed(width: 128, height: 128) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
