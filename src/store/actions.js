import { request } from './ajaxApi'
const actions = {
  async test ({ dispatch, commit }) {
    await dispatch('createOrder')
    console.log('23123')
  },
  async createOrder ({ commit }) {
    const res = await request({
      method: 'GET',
      url: '/api/book/getScreen'
    })
    commit('getTest', res)
    return res
  }
}
export default actions
