import * as React from "react";

import { rhythm, scale } from "../utils/typography"
import styled from 'styled-components'
import Image, { FixedObject } from "gatsby-image"

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
      html: HTMLElement
    }
}

interface SelfIntroProps {
    top?: FixedObject,
    pro?: FixedObject,
    selfIntro?: SelfIntroType[]
}

const Wrapper = styled.div`
    position: relative;
`
const NText = styled.p`
    position: absolute;
    color: #353559;
    font-weight: bold;
    bottom: 61px;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    margin: 0;
    left: 42px;
`
const JText = styled.p`
    position: absolute;
    color: #353559;
    font-weight: bold;
    bottom: 23px;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin: 0;
    left: 108px;
`
const ProBox = styled.div`
    background-color: rgba(255,255,255,0.2);
    position: absolute;
    top: 74px;
    left: 93px;
    width: 275px;
    height: 276px;
    border: 1px solid #353559;
    box-sizing: border-box;
` 
const ProImage = styled(Image)`
    position: absolute;
    z-index: 100;
    top: 31px;
    left: 73px;
    border-radius: 50%;
`
const Line = styled.div`
    position: absolute;
    z-index: 20;
    left: 93px;
    top: 169px;
    width: 960px;
    border: 0.5px solid #353559;
`
const SelfIntroText = styled.div`
    position: absolute;
    width: 612px;
    height: 86px;
    left: 441px;
    top: 74px;
    font-size: 14px;
    line-height: 28px;
    color: #353559;
`
const NameAndFriganaText = styled.p`
    position: absolute;
    width: 611px;
    height: 25px;
    left: 441px;
    top: 189px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
`
const DiscriptionTitle = styled.div`
    position: absolute;
    width: 147px;
    height: 126px;
    left: 442px;
    top: 224px;
    font-weight: bold;
    font-size: 14px;
    line-height: 28px;
`
const Discription = styled.div`
    position: absolute;
    width: 569px;
    height: 126px;
    left: 609px;
    top: 224px;
    font-weight: 500;
    font-size: 14px;
    line-height: 28px;
`
class SelfIntro extends React.Component<SelfIntroProps> {
    render() {
        const data = this.props.selfIntro[0].node
        return (
            <Wrapper>
                <Image
                    fixed={this.props.top}
                    alt="top"
                />
                <Line />
                <ProBox>
                    <ProImage fixed={this.props.pro}
                        alt="profile"
                    />
                    <NText>{data.frontmatter.name}</NText> 
                    <JText>{data.frontmatter.job}</JText> 
                </ProBox>
                <SelfIntroText dangerouslySetInnerHTML={{ __html: data.html }} />
                <NameAndFriganaText>{data.frontmatter.name_and_frigana}</NameAndFriganaText>
                <DiscriptionTitle>
                    性別<br/>
                    生年月日<br/>
                    現住所<br/>
                </DiscriptionTitle>
                <Discription>
                    {data.frontmatter.sex}<br/>
                    {data.frontmatter.birth_date}<br/>
                    {data.frontmatter.address}<br/>
                </Discription>
            </Wrapper>
        )
    }
}

export default SelfIntro
