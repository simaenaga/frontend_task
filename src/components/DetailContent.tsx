import * as React from "react";
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'

import Image, { FixedObject } from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'

library.add(faAddressBook)//あらかじめ使用するアイコンを追加しておく


const Wrapper = styled.section`
    width: 50%;
    height: 50%;

    & > .icon {
        color: rgba(53,53,89, 0.3);
        position: relative;
        top: 114px;
        margin-right: 14.88px;
        margin-left: 31px;
        fill: #fff;
    }
    & > h3 {
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
    }

    & > .line { 
        position: relative;
        border: 0.5px solid rgba(53,53,89, 0.3);
        width: 520px;
        margin-left: 66px;
        top: 125px;
    }
`

interface DetailContentProps {
    title: string
    children: any
}

const DetailContent = (props: DetailContentProps) => {
    return (
        <Wrapper>
            <FontAwesomeIcon icon="address-book" className="icon"/>
            <h3>{props.title}</h3>
            <div className="line"/>
            {props.children}
        </Wrapper>
    )
}
export default DetailContent