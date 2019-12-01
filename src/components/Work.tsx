import * as React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import { rhythm, scale } from "../utils/typography"
import styled from 'styled-components'
import Image, { FixedObject } from "gatsby-image"
import { Link } from "gatsby";
library.add(faChevronRight)
const WorkBox = styled.div`
    height: 805px;
    top: 1235px;
`
const Title = styled.h2`
    position: absolute;
    width: 1198px;
    height: 28px;
    left: 0px;
    top: 550px;
    margin: 0;
    font-weight: bold;
    font-size: 40px;
    line-height: 28px;
    text-align: center;
    font-family: Roboto;
    color:#353559;

`
const Overview = styled.p`
    position: absolute;
    width: 1198px;
    height: 26px;
    left: 0px;
    top: 592px;

    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    color:#353559;
    text-align: center;
`
const Icon = styled(FontAwesomeIcon)`
    text-align: center;
    font-size: 14px;
`
const WorkItem = styled(Link)`
    margin-left:157px;
    width: 273px;
    height: 423px;
`
const ItemBox = styled.div`
    display: -webkit-flex;
    display: flex;
`
interface Wr{
    node: {fields: { slug:string },
          frontmatter: {
            name: string
          }}
  }
interface WorkProps {
    work:{ edges:Wr[]}
}
class Work extends React.Component<WorkProps> {
    render(){
        const work = this.props.work.edges
        return (
            <WorkBox>
                <Title>WORKS</Title>
                <Overview>制作実績など</Overview>
                <ItemBox>
                <WorkItem to={work[0].node.fields.slug}>
                <Icon icon="chevron-right"/>
                </WorkItem>
                <WorkItem to={work[1].node.fields.slug}>
                <Icon icon="chevron-right"/>
                </WorkItem>
                <WorkItem to={work[2].node.fields.slug}>
                <Icon icon="chevron-right"/>
                </WorkItem>
                </ItemBox>
               
                {/* <i class="fas fa-chevron-right"></i> */}
            </WorkBox>
        )
    }
}
export default Work