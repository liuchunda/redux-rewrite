function isPureObject(obj){
  if(obj === null || typeof obj !=="object"){
    return false
  }
  let proto = obj
  while(Object.getPrototypeOf(proto)!== null){
    proto = Object.getPrototypeOf(obj)
  }
  return proto === Object.getPrototypeOf(obj)
}
export default isPureObject