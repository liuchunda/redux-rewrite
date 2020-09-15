import React from 'react'
import actions from '../store/action/index'
import {connect} from '../react-redux/index'
class Color extends React.Component{
  componentDidMount(){
  }
  chageClolr(color){
    this.props.updateColor(color)
  }
  render(){
    return <div style={{border:"2px solid red",padding:'10px'}}>
      <button onClick={()=>{this.chageClolr('green')}}>green</button>
      <button onClick={()=>{this.chageClolr('red')}}>red</button>
      <button onClick={()=>{this.chageClolr('yellow')}}>yellow</button>
      <span>{this.props.color}</span>
    </div>
  }
}
const stateToProps =function(state){
  return state
}
export default connect(stateToProps,actions)(Color)