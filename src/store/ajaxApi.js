import fly from './fatec'
import store from './index'
export async function request (obj) {
  let token = store.state.token
  return new Promise((resolve, reject) => {
    fly.request({
      method: obj.method,
      url: obj.url,
      herder: {
        'xxToken': token,
        'xxDeviceType': 'wxapp'
      },
      body: obj.data
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
