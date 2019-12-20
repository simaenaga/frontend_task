import * as React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'

import { rhythm, scale } from "../utils/typography"
import styled from 'styled-components'
import Image, { FixedObject } from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleUp)


interface LayoutProps {
}

const UpWrapper = styled.div`
  position: fixed;
  background-color: #EF75BE;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  bottom: 32px;
  right: 93px;
  display: block;
  float: right; 
  text-align: center;

  & > .icon {
    position: relative;
    top: 10px;
    font-size: 44px;
    color: white;
  }
`


const Up = () =>{
  return <UpWrapper><FontAwesomeIcon icon="angle-up" className="icon"/></UpWrapper>
}


const Wrapper = styled.div`
  margin: auto;
  width: 1200px;
  font-family: Roboto;
  font-style: normal;
  overflow-x: hidden;

  & > .footer {
    height: 64px;
    background: #353559;
    bottom: 0px;
  }
`

class Layout extends React.Component<LayoutProps> {
  componentDidMount() {
    window.addEventListener('scroll', e => this.watchCurrentPosition(), true)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', e => {})
  }

  watchCurrentPosition() {
    let top = document.getElementById("top_button")
    if(this.scrollTop() >= 600){
      top.hidden = false
    }else{
      top.hidden = true
    }
  }

  scrollTop() {
      return Math.max(
          window.pageYOffset,
          document.documentElement.scrollTop,
          document.body.scrollTop);
  }
  handleOnClick = (e) => {
      console.log("aaa")
      e.preventDefault();
      const duration: number = 300;
      let currentY: number = window.pageYOffset; 
      const step: number = duration/currentY > 1 ? 10 : 100;
      const timeStep: number = duration/currentY * step;

      const scrollUp = () => {
        currentY = window.pageYOffset;
        if(currentY === 0) {
          clearInterval(intervalID);
        } else {
          scrollBy( 0, -step );
        }
      }

      const intervalID: NodeJS.Timeout = setInterval(scrollUp, timeStep);
  }
  render() {
    const { children } = this.props
    // ???????????????????????????????
    return (
      <Wrapper>
        <main>{children}</main>
        <div id="top_button" onClick={this.handleOnClick}><Up/></div>
        <div className="footer"/>
      </Wrapper>
    )
  }
}

export default Layout
