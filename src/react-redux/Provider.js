import React from 'react'
import ReduxContext from './context'
class Provider extends React.Component{
constructor(props){
super(props)
this.state={
 }
}
componentDidMount(){
}
render(){
return <ReduxContext.Provider value={this.props.store}>
  {this.props.children}
</ReduxContext.Provider>
}
}
export default Provider