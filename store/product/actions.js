import { productMutations } from '~/constants/vuex'
const qs = require('qs')
export default {
  async fetchData({ state, commit }) {
    try {
      const queryString = qs.stringify(state.query)
      // console.log(queryString)
      const response = await this.$axios.get('/blogs?' + queryString)
      // console.log(response.data)
      commit(productMutations.SET.DATA, response.data, { root: true })
    } catch (error) {
      console.log('action error', error)
    }
  },
}
