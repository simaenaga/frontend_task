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
  handleOnClick = () => {
    const scrollTop = (duration) => {
      const target = document.getElementById("top-return");

      target.addEventListener('click', function() {
        let currentY = window.pageYOffset; 
        const step = duration/currentY > 1 ? 10 : 100;
        const timeStep = duration/currentY * step;

        const scrollUp = () => {
          currentY = window.pageYOffset;
          if(currentY === 0) {
            clearInterval(intervalID);
          } else {
            scrollBy( 0, -step );
          }
        }

        const intervalID = setInterval(scrollUp, timeStep);
      });
    }

    scrollTop(500);
  }
  render() {
    const { children } = this.props
    // ???????????????????????????????
    return (
      <Wrapper>
        <main>{children}</main>
        {/* <button id="top-return" onClick={this.handleOnClick}></button> */}
        <Footer/>
      </Wrapper>
    )
  }
}

export default Layout
