// 是否是数组
function isEmptyArray(obj) {
  return Array.isArray(obj) && !!obj.length
}

function checkEmpty(...args) {
  let ret
  if (args.length > 0) {
    ret = args.shift()
    let tmp
    while (ret && args.length > 0) {
      tmp = args.shift()
      ret = ret[tmp]
    }
  }
  return ret || false
}

export default {
  isEmptyArray,
  checkEmpty
}
