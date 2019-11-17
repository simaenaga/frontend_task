import * as React from "react";

import { rhythm, scale } from "../utils/typography"
import styled from 'styled-components'
import Image, { FixedObject } from "gatsby-image"


const Footer = styled.div`
    height: 64px;
    background: #353559;
    bottom: 0px;
`
const Wrapper = styled.div`
  margin: auto;
  width: 1200px;
  font-family: Roboto;
  font-style: normal;
`
interface LayoutProps {
}

class Layout extends React.Component<LayoutProps> {
  render() {
    const { children } = this.props
    // ???????????????????????????????
    return (
      <Wrapper>
        <main>{children}</main>
        <Footer/>
      </Wrapper>
    )
  }
}

export default Layout
