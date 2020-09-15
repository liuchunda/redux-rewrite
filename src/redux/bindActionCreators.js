
function bindActionCreaor(actionCreator,dispatch){
  return function(){
    dispatch(actionCreator.apply(this,arguments))
  }
}
function bindActionCreators(actionCreators,dispatch){
  if(typeof actionCreators==="function"){
    return bindActionCreaor(actionCreators,dispatch)
  }
  let actionCreatorKeys = Object.keys(actionCreators);
  let boundActions = {}
  for (let i= 0;i<actionCreatorKeys.length;i++){
    const key = actionCreatorKeys[i]
    if(typeof actionCreators[key] === 'function'){
      boundActions[key]=bindActionCreaor(actionCreators[key],dispatch) 
    }else{
      throw console.warn(`${actionCreators}的${key}不是一个函数`);
    }
  }
  return boundActions
}
export default bindActionCreators