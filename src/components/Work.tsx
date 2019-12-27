import * as React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import { rhythm, scale } from "../utils/typography"
import styled from 'styled-components'
import Image, { FixedObject } from "gatsby-image"
import { Link } from "gatsby"

import WorkItem from "./WorkItem"

library.add(faChevronRight)
const WorkBox = styled.div`
    height: 685px;
    top: 1235px;

    & h2 {
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

    & > div {
        margin-top: 75px;
        margin-left:157px;
        display: -webkit-flex;
        display: flex;
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


interface Wr{
    node: {fields: { slug:string },
          frontmatter: {
            name: string
          }}
  }
interface WorkProps {
    work:{ edges:Wr[]},
    name: string,
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
    }
}
class Work extends React.Component<WorkProps> {
    render(){
        const work = this.props.work.edges
        let imgslug = work[0].node.fields.slug.slice(0, -5) === "/homepage/"

        return (
            <WorkBox>
                <h2>WORKS</h2>
                <p>制作実績など</p>
                <div>
                {/**slugの値をみて画像の判断してもいいかも */}
                {work.map(w => {
                    const to = w.node.fields.slug
                    let fixed: FixedObject = null
                    const name = w.node.frontmatter.name
                    let discription = ""
                    if(w.node.fields.slug.slice(0, -5) === "/homepage/"){
                        fixed = this.props.hp.childImageSharp.fixed
                        discription = "design, coding/html, css, etc."
                    }
                    if(w.node.fields.slug.slice(0, -5) === "/zemi/"){
                        fixed = this.props.zemi.childImageSharp.fixed
                        discription = "design, coding/javascript, etc."
                    }
                    if(w.node.fields.slug.slice(0, -5) === "/electron/"){
                        fixed = this.props.electron.childImageSharp.fixed
                        discription = "design, coding/electron, etc."
                    }
                    return(
                        <WorkItem 
                            key={name}
                            to={to}
                            fixed={fixed}
                            alt="top"
                            name={name}
                            discription={discription}
                        />
                    )
                })}
                     
                </div>
               
            </WorkBox>
        )
    }
}
export default Work