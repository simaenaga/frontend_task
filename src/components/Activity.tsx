import * as React from "react";

import styled from 'styled-components'
import Image, { FixedObject } from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart} from '@fortawesome/free-solid-svg-icons'
import { faPencilAlt} from '@fortawesome/free-solid-svg-icons'

library.add(faHeart, faPencilAlt)

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
  interests: {edges:InterestType[]},
  pen: any,
  book: any,
  radio: any
}

const ActivityBox = styled.div`
    height: 552px;
    top: 1235px;
    color:#353559;
    line-height: 28px;

    & > h2 {
      width: 1200px;
        height: 28px;
        margin: 120px auto 0 auto;
        font-weight: bold;
        font-size: 40px;
        line-height: 28px;
        text-align: center;
        font-family: Roboto;
        color:#353559;
    }

    & > p {
      width: 1200px;
        height: 26px;
        margin: 14px auto 0 auto;

        font-weight: 500;
        font-size: 16px;
        line-height: 28px;
        color:#353559;
        text-align: center;
    }
`

const InterestBox = styled.div`
  width: 465px;
  display: flex;
  position: relative;
  top: 20px;
  left: 53px;
  
  & > div {
    width: 155px;
    font-size: 16px;
    text-align: center;
    
    h3:first-child {
      margin: 7px 0;
      font-family: Roboto;
      font-size: 16px;
    }
  }

`

const Icon = styled(FontAwesomeIcon)`
    color: rgba(53,53,89, 0.3);
    position: relative;
    top: 0px;
    margin-right: 14.88px;
    margin-left: 31px;
    fill: #fff;
`
const Blog = styled.div`
  display: flex;
  position: relative;
  left: 64px;

  & > .title {
    position: relative;
    width: 400px;
    left: 32px;
    color: #EF75BE;
  }
`
const ContentsWrapper = styled.div`
  display: flex;
`
const ContentWrapper = styled.div`
  margin-top: 67px;
  width: 600px;

  & > h3 {
    margin:0;
    font-family: Roboto;
    white-space: nowrap;
    font-size: 16px;
    color: #ff981a;
    display: inline-block;
    position: relative;
  }

  & > hr {
    position: relative;
    width: 520px;
    left: 61px;
  }
`

const Content = (props) => {
  return(
    <ContentWrapper>
      <Icon icon={props.icon}/>
      <h3>{props.title}</h3>
      <hr/>
      {props.children}
    </ContentWrapper>
  )
}

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  left: 50px;

  & > .img {
    border-radius: 50%;
    margin: 0 15px;
  }

`
class Activity extends React.Component<ActivityProps> {
    render(){
      const interest = this.props.interests.edges
      const blog = this.props.blog.edges
        return (
            <ActivityBox>
              <h2>Activity</h2>
              <p>活動</p>


              <ContentsWrapper>

              
              <Content icon="pencil-alt" title="BLOG">
                {blog.map((blog, i) => {
                  const b = blog.node.frontmatter
                  return(
                    <Blog key={i}>
                      <div>{b.date}</div>
                      <div className="title">{b.title}</div>
                    </Blog>
                  )
                })}
              </Content>

              <Content icon="heart" title="INTEREST">

                <ImageWrapper>
                  {interest.map(interest => {
                    const i = interest.node.frontmatter
                    let fixed: FixedObject = null
                    fixed = this.props.pen
                 
                    if(i.name=="絵"){
                      fixed = this.props.pen
                    }
                    if(i.name=="ラジオ"){
                      fixed = this.props.radio
                    }
                    if(i.name=="小説"){
                      fixed = this.props.book
                    }
                    return(
                      <Image fixed={fixed} className="img" key={i.name}/>
                    )

                  })}
                </ImageWrapper>

                <InterestBox>
                  {interest.map((interest, index) => {
                    const i = interest.node.frontmatter
                    return(
                    <div key={index}>
                      <h3>{i.name}</h3>
                      <div>{i.description1}</div>
                      <div>{i.description2}</div>
                    </div>)
                })}
                </InterestBox>

              </Content>

              </ContentsWrapper>
            </ActivityBox>
            
        )
    }
}
export default Activity