import * as React from "react";
import Image, { FixedObject } from "gatsby-image"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "gatsby";

import styled from 'styled-components'

library.add(faChevronRight)
interface WorkItemProps {
    to: string
    name: string
    discription: string
    fixed: FixedObject
    alt: string
    rel?: string
}

const WrapperLink = styled(Link)`
    text-align: center;
    margin-right:30px;
    width: 273px;
    height: 423px;
    box-shadow: none;
    color:#353559;


    & > svg {
        margin-top: 35px; 
        font-size: 25px;
        color: #EF75BE;
    }
`
const WorkItem = (props: WorkItemProps) => {
    return(
        <WrapperLink to={props.to} rel={props.rel}>
            <Image
                fixed={props.fixed}
                alt={props.alt}
            />
            {props.name}<br/>
            {props.discription}<br/>
            <FontAwesomeIcon icon="chevron-right"/>
        </WrapperLink>
    )
}
export default WorkItem