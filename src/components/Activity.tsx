import * as React from "react";

import { rhythm, scale } from "../utils/typography"
import styled from 'styled-components'
import Image, { FixedObject } from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart} from '@fortawesome/free-solid-svg-icons'
import { faPencilAlt} from '@fortawesome/free-solid-svg-icons'

library.add(faHeart, faPencilAlt)
const ActivityBox = styled.div`
    height: 672px;
    top: 1235px;
`
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

interface ActivityProps {
  blog: {edges:BlogType[]},
  interests: {edges:InterestType[]}
}

class Activity extends React.Component<ActivityProps> {
    render(){
      const interest = this.props.interests.edges
      const blog = this.props.blog.edges
      // blog.sort(function(a, b) {
      //   if (a.node.frontmatter.date > b.node.frontmatter.date) {
      //     return 1;
      //   } else {
      //     return -1;
      //   }
      // })
      // blog.map(b => {
      //   console.log(b.node.frontmatter.date)
      // })
        return (
            <ActivityBox>
              <FontAwesomeIcon icon="pencil-alt"/>
              {interest.map((interest, index) => {
                const i = interest.node.frontmatter
                return(
                <div key={index}><div>{i.name}</div>
                <div>{i.description1}</div></div>)
              })}
              <FontAwesomeIcon icon="heart"/>

              {blog.map((blog, i) => {
                const b = blog.node.frontmatter
                return(
                <div key={i}><div>{b.title}</div>
                <div>{b.date}</div></div>)
              })}
            </ActivityBox>
            
        )
    }
}
export default Activity