import * as React from "react";

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
  margin-top: -134px;
  margin-left: 250px;
  font-size: 14px;

  & > div {
    width: 305px;
    & p {
      margin: 2px;
      width:50px;
      display: inline-block;
      text-align: right;
      height:24px;
    }
    & progress {
      -webkit-appearance: none;
      appearance: none;
      position: relative;
      left: 10px;
      height: 16px;
      width: 250px;
      border-radius: 0;
    }

    progress::-webkit-progress-value {
      background-color:#ff981a;
    
    }
    progress::-webkit-progress-bar{
      background-color: #353559
    }
  }
`

const ListBox = styled.ul`
  list-style: none;
  margin-top: 150px;
  padding-left: 35px;

  & > li {
    color: #353559;
    width: 520px;
    font-size: 16px;
    line-height: 28px;
    display: flex;
    
    .bold {
      font-weight: bold;
    }
  }

  li::before {
    content: "• ";
    font-size: 25px;
    opacity: 0.5;
    margin-right: 18px;
  }

  & > li:not(:last-child)::after {
    content: "";
    width: 1px;
    background:black;
    height: 74px;
    position: relative;
    right: 155px;
    top: 25px;
    opacity: 0.5;
  }
`

const PercentWrapper = styled.div`
  margin-left: 8px;
  padding-top: 38px;
  z-index:100;
  text-align: center;
  font-size: 20px;
`
const Per = styled.div`
  background: #353559;
  border-radius: 100% 0 0 0;
  width: 65px;
  height: 65px;
  position: relative;
`

const PerCircle = styled.div`
  z-index:1;
  background: #ff981a;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin-top: 35px;
  margin-left: 63px;

  &:hover > .hukidashi {
    display: block;
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
const PerSmallCircle = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: #F7F7F7;
  position: relative;
  top: -55px;
  left: 9px;
`
const Hukidashi = styled.div`
  display: none;
  background: rgba(0,0,0,0.5);
  border-radius: 4px;
  width: 97px;
  height: 43px;
  margin: 0;
  margin-top: -44px;
  margin-left: 50px;
  padding-top: 10px;
  padding-left: 6px;
  color: white;
  font-size: 14px;

  &::before {
    width: 0;
    height: 0;
    content: "";
    position: relative;
    top: -37px;
    left: 20px;
    border-style: solid;
    border-width: 0 4px 6.9px 4px;
    border-color: transparent transparent rgba(0,0,0,0.5) transparent;
  }

  &::after { 
    ${props => `content: ${props.children};`}
  }
`
const List = (props) => {
return(<li><span>{props.children}</span></li>)
}
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
                    <List>
                      <div className="bold">
                        {experience.now}<br/>
                        {experience.name}
                      </div>
                      
                      {experience.description}
                    </List>
                  </ListBox>
                </DetailContent>

                <DetailContent title="EDUCATION">
                  <ListBox>
                    <List>
                      <div className="bold">
                        {edu.now}<br/>
                        {edu.now_name}
                      </div>
                    </List>
                    <List>
                      <div className="bold">
                        {edu.pre_one}<br/>
                        {edu.pre_one_name}
                      </div>

                    </List>
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
                    <List><div dangerouslySetInnerHTML={{ __html: pq.node.html }}/></List>
                  </ListBox>

                  
                  
                  <PerCircle><Per/>
                    <PerSmallCircle>
                      <PercentWrapper>{per/5}%</PercentWrapper>
                    </PerSmallCircle>
                    <Hukidashi className="hukidashi">Green 75%</Hukidashi>
                  </PerCircle>
                  
                  <ItemBox>
                    <div>
                      <p>{pqItem.item1}</p>
                      <progress max="100" value={pqItem.item1_per} className="pb"/>
                    </div>
                    <div>
                      <p>{pqItem.item2}</p>
                      <progress max="100" value={pqItem.item2_per}/>
                    </div>
                    <div>
                      <p>{pqItem.item3}</p>
                      <progress max="100" value={pqItem.item3_per}>猫です</progress>
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