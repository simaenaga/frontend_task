import * as React from "react";

import { rhythm, scale } from "../utils/typography"
import styled from 'styled-components'

import Level from "./Level"
import DetailContent from "./DetailContent"

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

const DetailBox = styled.div`
    height: 1160px;
    top: 1235px;
    background: rgba(53,53,89, 0.05);
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
` 
const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  top:  100px;
  left: 200px;
  font-size: 14px;

  & > div {
    p {
      margin: 2px;
      width:100px;
      display: inline-block;
      text-align: right;
      height:24px;
    }
    progress {
      position: relative;
      left: 50px;
      height: 16px;
      width: 250px;
      overflow: hidden;
      border-radius: 0;
    }
  }
`

const ListBox = styled.ul`
  & > li {
    color: #353559;
    position: relative;
    width: 520px;
    font-size: 16px;
    line-height: 28px;
    left: 53px;
    top: 150px;
    
    .bold {
      font-weight: bold;
    }
  }

  & > li:not(:last-child)::after {
    content: "";
    width: 1px;
    background:black;
    height: 74px;
    position: absolute;
    left: -16px;
    top: 17px;
  }
`

const PercentWrapper = styled.div`
  position: relative;
  top: 200px;
  left: 100px;

  & > span {
    width: 80px;
    font-size: 50px;
  }
`


const SkillLists = styled.ul`
  position: relative;
  left: 60px;
  top: 150px;
  list-style: none;
  color: #353559;

  & > li {
    display: flex;
    font-size: 14px;
    line-height: 28px;

    span:first-child {
      width: 132px;
      font-weight: bold;
    }

    span:nth-child(3) {
      position:absolute;
      left: 320px;
      font-weight: 500;
    }
  }
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
                <DetailContent title="EXPELIENCE">
                  <ListBox>
                    <li>
                      <div className="bold">
                        {experience.now}<br/>
                        {experience.name}
                      </div>
                      
                      {experience.description}
                    </li>
                  </ListBox>
                </DetailContent>

                <DetailContent title="EDUCATION">
                  <ListBox>
                    <li>
                      <div className="bold">
                        {edu.now}<br/>
                        {edu.now_name}
                      </div>
                    </li>
                    <li>
                      <div className="bold">
                        {edu.pre_one}<br/>
                        {edu.pre_one_name}
                      </div>

                    </li>
                  </ListBox>
                </DetailContent>

                <DetailContent title="SKILL">
                  <SkillLists>
                    <li>
                      <span>JavaScript</span>
                      <Level level={skill.JS}/>
                      <span>{skill.JS_description}</span>
                    </li>
                    <li>
                      <span>HTML/CSS</span>
                      <Level level={skill.HTML_and_CSS}/>
                      <span>{skill.HC_description}</span>
                    </li>
                    <li>
                      <span>Java</span>
                      <Level level={skill.Java}/>
                      <span>{skill.Java_description}</span>
                    </li>
                    <li>
                      <span>Ruby</span>
                      <Level level={skill.Ruby}/>
                      <span>{skill.Ruby_description}
                    </span></li>
                    <li>
                      <span>React/Redux</span>
                      <Level level={skill.React_Redux}/>
                      <span>{skill.RR_description}</span>
                    </li>
                    <li>
                      <span>Unity</span>
                      <Level level={skill.Unity}/>
                      <span>{skill.Unity_description}
                      </span>
                    </li>
                  </SkillLists>
                </DetailContent>

                <DetailContent title="PERSONAL QUALITIES">
                  <ListBox>
                    <li><div dangerouslySetInnerHTML={{ __html: pq.node.html }}/></li>
                  </ListBox>

                  <PercentWrapper><span>{per/5}</span>%</PercentWrapper>

                  <ItemBox>
                    <div>
                      <p>{pqItem.item1}</p>
                      <progress max="100" value={pqItem.item1_per}/>
                    </div>
                    <div>
                      <p>{pqItem.item2}</p>
                      <progress max="100" value={pqItem.item2_per}/>
                    </div>
                    <div>
                      <p>{pqItem.item3}</p>
                      <progress max="100" value={pqItem.item3_per}/>
                    </div>
                    <div>
                      <p>{pqItem.item4}</p>
                      <progress max="100" value={pqItem.item4_per}/>
                    </div>
                    <div>
                      <p>{pqItem.item5}</p>
                      <progress max="100" value={pqItem.item5_per}/>
                    </div>
                  </ItemBox>

                </DetailContent>

            </DetailBox>
        )
    }
}
export default Detail