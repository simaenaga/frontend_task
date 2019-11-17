import * as React from "react";

import { rhythm, scale } from "../utils/typography"
import styled from 'styled-components'
import Image, { FixedObject } from "gatsby-image"
const DetailBox = styled.div`
    height: 1160px;
    top: 1235px;
    background: #F7F7F7;
`
class Detail extends React.Component {
    render(){
        return (
            <DetailBox />
        )
    }
}
export default Detail