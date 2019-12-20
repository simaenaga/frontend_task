import * as React from "react";
import styled from 'styled-components'


const Circle = styled.div`
  background-color: ${props => props.isLignt ? '#ff981a' : 'rgba(53,53,89, 0.3)'} ;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-left: 6px;
`
interface LevelProps {
  level: number
}
const LevelWrapper = styled.div`
  position: relative;
  top: 10px;
  display: flex;
  width: 70px;
  margin-left: 59px;
`
class Level extends React.Component<LevelProps>{
  render() {
    const level = this.props.level
    let is1stLignt:boolean = false
    let is2ndLignt:boolean = false
    let is3rdLignt:boolean = false
    let is4thLignt:boolean = false
    let is5thLignt:boolean = false

    if(level == 5){
      is1stLignt = true
      is2ndLignt = true
      is3rdLignt = true
      is4thLignt = true
      is5thLignt = true
    }
    if(level == 4){
      is1stLignt = true
      is2ndLignt = true
      is3rdLignt = true
      is4thLignt = true
      is5thLignt = false
    }
    if(level == 3){
      is1stLignt = true
      is2ndLignt = true
      is3rdLignt = true
      is4thLignt = false
      is5thLignt = false
    }
    if(level == 2){
      is1stLignt = true
      is2ndLignt = true
      is3rdLignt = false
      is4thLignt = false
      is5thLignt = false
    }
    if(level == 1){
      is1stLignt = true
      is2ndLignt = false
      is3rdLignt = false
      is4thLignt = false
      is5thLignt = false
    }
    if(level == 0){
      is1stLignt = false
      is2ndLignt = false
      is3rdLignt = false
      is4thLignt = false
      is5thLignt = false
    }
    return(
      <LevelWrapper>
        <Circle isLignt={is1stLignt}/>
        <Circle isLignt={is2ndLignt}/>
        <Circle isLignt={is3rdLignt}/>
        <Circle isLignt={is4thLignt}/>
        <Circle isLignt={is5thLignt}/>    
      </LevelWrapper>
    )
  }
}

export default Level