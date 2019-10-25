import alipay from '@service.alipay'

function aliPay(pullUpUrl) {
  return new Promise((reject, resolve) => {
    alipay.pay({
      orderInfo: pullUpUrl,
      callback: function (ret) {
        if (ret.code === 4000) {
          return reject(ret.msg)
        }
        resolve(ret)
      }
    })
  })

}

function getArg(str, arg) {
  const reg = new RegExp('(^|&)' + arg + '=([^&]*)(&|$)', 'i')
  const r = str.match(reg)
  if (r != null) {
    return unescape(r[2])
  }
  return null
}

export {
  aliPay,
  getArg
}