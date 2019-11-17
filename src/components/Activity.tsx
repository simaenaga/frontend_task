import * as React from "react";

import { rhythm, scale } from "../utils/typography"
import styled from 'styled-components'
import Image, { FixedObject } from "gatsby-image"
const ActivityBox = styled.div`
    height: 672px;
    top: 1235px;
`
class Activity extends React.Component {
    render(){
        return (
            <ActivityBox />
        )
    }
}
export default Activity