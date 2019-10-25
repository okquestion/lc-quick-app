import fetch from '@system.fetch'
import prompt from '@system.prompt'
import nativeRequest from '@system.request'
import { getUser } from './login'

function request(method = 'GET') {
  return (url, data = {}) => {
    return new Promise(async (resolve, reject) => {
      const user = await getUser()
      const token = user.token || ''
      const baseUrl = 'http://lxwy.yufewell.cn/'
      const headerDefault = { authorization: '', token: token }
      const header = url && url === 'file/upload' ? { 'Content-Type': 'multipart/form-data', ...headerDefault } : headerDefault
      const options = {
        url: baseUrl + url,
        method,
        data,
        header: header,
        success: function (data) {
          if (data.code !== 200) {
            console.error(data)
            prompt.showToast({ message: typeof data.data === 'string' ? data.data : JSON.stringify(data.data) })
            reject(data)
            return
          }
          const contentType = data.headers['content-type'] || data.headers['Content-Type']
          if (contentType.includes('application/json')) data.data = JSON.parse(data.data)
          resolve(data.data)
        },
        fail: function (data, code) {
          console.info('fail', data, code)
          prompt.showToast({ message: typeof data === 'string' ? data : JSON.stringify(data) })
          reject({ data, code })
        }
      }
      fetch.fetch(options)
    })
  }
}

function download(url, options = {}) {
  return new Promise((res, rej) => {
    const opts = Object.assign({}, options, {
      url,
      success(data) {
        const token = data.token
        nativeRequest.onDownloadComplete({
          token,
          success(data) {
            res(data.uri)
          },
          fail: function (data, code) {
            console.error(`handling fail, code = ${code}`)
            res({msg: url + '下载保存失败', data, code})
          }
        })
      },
      fail(data, code) {
        console.info(`handling fail, code = ${code}`)
        rej({ msg:  url + '下载失败', data, code })
      }
    })
    nativeRequest.download(opts)
  })
}


export default {
  get: request('GET'),
  post: request('POST'),
  delete: request('DELETE'),
  download,
}