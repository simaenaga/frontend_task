import * as React from "react";

import { rhythm, scale } from "../utils/typography"
import styled from 'styled-components'
import Image, { FixedObject } from "gatsby-image"
const WorkBox = styled.div`
    height: 805px;
    top: 1235px;
`
class Work extends React.Component {
    render(){
        return (
            <WorkBox />
        )
    }
}
export default Work