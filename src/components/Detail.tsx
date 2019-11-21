import * as React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'

import { rhythm, scale } from "../utils/typography"
import styled from 'styled-components'
import Image, { FixedObject } from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { node } from "prop-types";


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
interface DetailProps {

  education: EducationType ,
  experience: ExperienceType,
  skill: SkillType,
  pq: PQType

}
const ContentBox = styled.section`
    width: 50%;
    height: 50%;
`
const CTitle = styled.h3`
    margin:0;
    height: 28px;
    white-space: nowrap;
    font-family: Roboto;
    font-weight: bold;
    font-size: 16px;
    line-height: 28px;
    color: #ff981a;
    display: inline-block;
    position: relative;
    top: 114px;
`

// background: #353559;

const Icon = styled(FontAwesomeIcon)`
    color: rgba(53,53,89, 0.3);
    position: relative;
    top: 114px;
    margin-right: 14.88px;
    margin-left: 31px;
    fill: #fff;
`
const DetailBox = styled.div`
    height: 1160px;
    top: 1235px;
    background: rgba(53,53,89, 0.05);
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
` 
library.add(faAddressBook)//あらかじめ使用するアイコンを追加しておく
const TitleLine = styled.div`
    position: relative;
    border: 0.5px solid rgba(53,53,89, 0.3);
    width: 520px;
    margin-left: 66px;
    top: 125px;
`
const Title = (props) => {
  return(
    <div>
      <Icon icon="address-book" />
      <CTitle>{props.children}</CTitle>
      <TitleLine/>
    </div>
  )
}
const List = styled.li`
  color: #353559;
`
const Circle = styled.div`
  background-color: ${props => props.isLignt ? '#ff981a' : 'rgba(53,53,89, 0.3)'} ;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-left: 6px;
`
interface LevelProps {
  level: number
}
const LevelWrapper = styled.div`
  position: relative;
  top: 10px;
  display: flex;
  width: 70px;
  margin-left: 59px;
`
class Level extends React.Component<LevelProps>{
  render() {
    const level = this.props.level
    let is1stLignt:boolean = false
    let is2ndLignt:boolean = false
    let is3rdLignt:boolean = false
    let is4thLignt:boolean = false
    let is5thLignt:boolean = false

    if(level == 5){
      is1stLignt = true
      is2ndLignt = true
      is3rdLignt = true
      is4thLignt = true
      is5thLignt = true
    }
    if(level == 4){
      is1stLignt = true
      is2ndLignt = true
      is3rdLignt = true
      is4thLignt = true
      is5thLignt = false
    }
    if(level == 3){
      is1stLignt = true
      is2ndLignt = true
      is3rdLignt = true
      is4thLignt = false
      is5thLignt = false
    }
    if(level == 2){
      is1stLignt = true
      is2ndLignt = true
      is3rdLignt = false
      is4thLignt = false
      is5thLignt = false
    }
    if(level == 1){
      is1stLignt = true
      is2ndLignt = false
      is3rdLignt = false
      is4thLignt = false
      is5thLignt = false
    }
    if(level == 0){
      is1stLignt = false
      is2ndLignt = false
      is3rdLignt = false
      is4thLignt = false
      is5thLignt = false
    }
    return(
      <LevelWrapper>
        <Circle isLignt={is1stLignt}/>
        <Circle isLignt={is2ndLignt}/>
        <Circle isLignt={is3rdLignt}/>
        <Circle isLignt={is4thLignt}/>
        <Circle isLignt={is5thLignt}/>    
      </LevelWrapper>
    )
  }
}
const NoneStyleUl = styled.ul`
  position: relative;
  left: 60px;
  top: 150px;
  list-style: none;
`
const SkillList = styled(List)`
  display: flex;
`
const Descliption = styled.p`
  position:absolute;
  left: 320px;
  font-weight: 500;
  font-size: 14px;
  line-height: 28px;
`
const STitle = styled.p`
  width: 132px;
  font-weight: bold;
  font-size: 14px;
  line-height: 28px;
`
class Detail extends React.Component<DetailProps> {
    render(){
      const experience = this.props.experience.node.frontmatter
      const edu = this.props.education.node.frontmatter
      const skill = this.props.skill.node.frontmatter
      const pq = this.props.pq
      const pqItem = pq.node.frontmatter
      const per = pqItem.item1_per + pqItem.item2_per + pqItem.item3_per + pqItem.item4_per + pqItem.item5_per
        return (
            <DetailBox>
                <ContentBox>
                  <Title>EXPELIENCE</Title>
                  <ul>
                    <List>
                      {experience.now}
                      {experience.name}
                      {experience.description}
                    </List>
                  </ul>
                </ContentBox>
                <ContentBox>
                  <Title>EDUCATION</Title>
                  <ul>
                    <List>
                      {edu.now}
                      {edu.now_name}
                    </List>
                    <List>
                      {edu.pre_one}
                      {edu.pre_one_name}
                    </List>
                  </ul>
                </ContentBox>
                <ContentBox>
                  <Title>SKILL</Title>
                  <NoneStyleUl>
                    <SkillList><STitle>JavaScript</STitle><Level level={skill.JS}/><Descliption>{skill.JS_description}</Descliption></SkillList>
                    <SkillList><STitle>HTML/CSS</STitle><Level level={skill.HTML_and_CSS}/><Descliption>{skill.HC_description}</Descliption></SkillList>
                    <SkillList><STitle>Java</STitle><Level level={skill.Java}/><Descliption>{skill.Java_description}</Descliption></SkillList>
                    <SkillList><STitle>Ruby</STitle><Level level={skill.Ruby}/><Descliption>{skill.Ruby_description}</Descliption></SkillList>
                    <SkillList><STitle>React/Redux</STitle><Level level={skill.React_Redux}/><Descliption>{skill.RR_description}</Descliption></SkillList>
                    <SkillList><STitle>Unity</STitle><Level level={skill.Unity}/><Descliption>{skill.Unity_description}</Descliption></SkillList>
                  </NoneStyleUl>
                  </ContentBox>
                <ContentBox>
                  <Title>PERSONAL QUALITIES</Title>
                  <ul>
                    <List><div dangerouslySetInnerHTML={{ __html: pq.node.html }}/></List>
                  </ul>
                  {per}
                  {pqItem.item1}<progress max="100" value={pqItem.item1_per}/>
                  {pqItem.item2}<progress max="100" value={pqItem.item2_per}/>
                  {pqItem.item3}<progress max="100" value={pqItem.item3_per}/>
                  {pqItem.item4}<progress max="100" value={pqItem.item4_per}/>
                  {pqItem.item5}<progress max="100" value={pqItem.item5_per}/>
                </ContentBox>
            </DetailBox>
        )
    }
}
export default Detail