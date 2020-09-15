import React from 'react'
import store from '../store/index'
import actions from '../store/action/index'
class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: store.getState().user
    }
    this.tempName = ""
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        userInfo: store.getState().user
      })
    })
    actions.updateUser({ userName: "aaa", userId: 1000 })
  }
  chageUserName = (name) => {
    actions.updateUser(Object.assign(store.getState().user, { userName: name }))
  }
  chageUserId=(id)=>{
    actions.updateUser(Object.assign(store.getState().user, { userId: id }))
  }
  render() {
    return <div style={{border:"2px solid green",padding:'10px',marginTop:"10px"}}>
      <input placeholder="改变用户姓名" onChange={(event) => {
        this.chageUserName(event.target.value)
      }} type="text" />
       <input placeholder="改变用户id" onChange={(event) => {
        this.chageUserId(event.target.value)
      }} type="text" />
      <div>用户名字： {this.state.userInfo.userName}</div>
      <div>用户id： {this.state.userInfo.userId}</div>
    </div>
  }
}
export default User