import * as React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { rhythm, scale } from "../utils/typography"
import styled from 'styled-components'
import Image, { FixedObject } from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const SnsBox = styled.div`
    height: 280px;
    background: rgba(53,53,89, 0.05);
`
library.add(fab)
class Sns extends React.Component {
    render(){
        return (
            <SnsBox>
                <FontAwesomeIcon icon={['fab', 'facebook']}/>
                <FontAwesomeIcon icon={['fab', 'instagram']}/>
                <FontAwesomeIcon icon={['fab', 'twitter']}/>
            </SnsBox>
        )
    }
}
export default Sns