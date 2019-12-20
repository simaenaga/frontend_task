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
      html: string
    }
}

interface SelfIntroProps {
    top?: FixedObject,
    pro?: FixedObject,
    selfIntro?: SelfIntroType[]
}

const Wrapper = styled.div`
    position: relative;

    & h1 {
        position: absolute;
        color: #353559;
        font-weight: bold;
        bottom: 61px;
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;
        margin: 0;
        left: 42px;
    }

    & > h2 {
        color: #353559;
        margin: 0;
        position: absolute;
        width: 611px;
        height: 25px;
        left: 441px;
        top: 189px;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        font-family: Roboto;
    }

    & .pro {
        position: absolute;
        z-index: 100;
        top: 31px;
        left: 73px;
        border-radius: 50%;
    }
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

    & > p {
        position: absolute;
        color: #353559;
        font-weight: bold;
        bottom: 23px;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        margin: 0;
        left: 108px;
    }
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

const Discription = styled.div`
    color: #353559;
    font-size: 14px;
    line-height: 28px;

    & .title {
        position: absolute;
        width: 147px;
        height: 126px;
        left: 442px;
        top: 224px;
        font-weight: bold;
    }

    & .content {
        position: absolute;
        width: 569px;
        height: 126px;
        left: 609px;
        top: 224px;
        font-weight: 500;
    }

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
                    <Image
                        fixed={this.props.pro}
                        alt="profile"
                        className="pro"
                    />
                    <h1>{data.frontmatter.name}</h1> 
                    <p>{data.frontmatter.job}</p> 
                </ProBox>

                <SelfIntroText dangerouslySetInnerHTML={{ __html: data.html }} />
                <h2>{data.frontmatter.name_and_frigana}</h2>
                <Discription>
                    <div className="title">
                        性別<br/>
                        生年月日<br/>
                        現住所<br/>
                    </div>
                    <div className="content">
                        {data.frontmatter.sex}<br/>
                        {data.frontmatter.birth_date}<br/>
                        {data.frontmatter.address}<br/>
                    </div>
                </Discription>
                
            </Wrapper>
        )
    }
}

export default SelfIntro
