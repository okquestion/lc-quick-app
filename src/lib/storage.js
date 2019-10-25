import storage from '@system.storage'

function getJSON(key) {
  return new Promise((resolve, reject) => {
    storage.get({
      key,
      success: function (data) {
        try {
          const value = JSON.parse(data)
          resolve(value)
        } catch (e) {
          resolve(data)
        }
      },
      fail: function (data, code) {
        console.info(`handling fail, code = ${code}`)
        reject(new Error(data))
      }
    })
  })
}

function get(key) {
  return new Promise((resolve, reject) => {
    storage.get({
      key,
      success: function (data) {
        resolve(data)
      },
      fail: function (data, code) {
        console.info(`handling fail, code = ${code}`)
        reject(new Error(data))
      }
    })
  })
}

function set(key, value) {
  return new Promise((resolve, reject) => {
    storage.set({
      key,
      value,
      success: function (data) {
        resolve(data)
      },
      fail: function (data, code) {
        console.info(`handling fail, code = ${code}`)
        reject(new Error(data))
      }
    })
  })
}


function deleteKey(key) {
  return new Promise((resolve, reject) => {
    storage.delete({
      key,
      // value,
      success: function (data) {
        resolve()
      },
      fail: function (data, code) {
        console.info(`handling fail, code = ${code}`)
        reject(new Error(data))
      }
    })
  })
}

export default {
  getJSON,
  get,
  set,
  delete: deleteKey
}