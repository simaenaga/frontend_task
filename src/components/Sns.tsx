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
    display: flex; 

    & > a {
        margin-top: 120px;
        width: 40px;
        height: 40px;
        box-shadow: none;
    }

    a:first-child {
        margin-left: 510px;
    }

    a:not(:last-child) {
        margin-right: 30px;
    }
`
library.add(fab)
const CircleIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #EF75BE;
    margin-right: 30px;
`
const WhiteIcon = styled(FontAwesomeIcon)`
    color: white;
    font-size: 25px;
    position: relative;
    top: 5px;
    left: 8px;
`
const Icon = (props) => {
    return(
        <CircleIcon>
        <WhiteIcon icon={props.icon}/>
        </CircleIcon>
    )
}
const FacebookIcon = styled(FontAwesomeIcon)`
    color: #EF75BE;
    font-size: 40px;
`

class Sns extends React.Component {
    render(){
        return (
            <SnsBox>
                <a href="https://www.facebook.com/"><FacebookIcon icon={['fab', 'facebook']}/></a>
                <a href="https://www.instagram.com/"><Icon icon={['fab', 'instagram']}/></a>
                <a href="https://twitter.com/home"><Icon icon={['fab', 'twitter']}/></a>
            </SnsBox>
        )
    }
}
export default Sns