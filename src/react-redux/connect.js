
import React from 'react'
import ReduxContext from './context'
function connect(stateToprops,action){
  return function(Component){
     class ReduxConsumer extends React.Component{
      static contextType = ReduxContext;
      constructor(props,context){
        super(props)
        this.state={
          storeState:stateToprops(context.getState())
        }
      }
      componentDidMount(){
        this.context.subscribe(()=>{
          this.setState({
            storeState:stateToprops(this.context.getState())
          })
        })
      }
      render(){
        return <Component {...this.state.storeState} {...action}/>
      }
    }
    return ReduxConsumer
  }
}
export default connect