import { createStore } from 'vuex'

export default createStore({
  state: {
    userId: ''
  },
  getters:{
    loggedIn: (state) => {
      return Boolean(state.userId.trim())
    },
  },
  mutations: {
    setUserId(state, userId) {
      state.userId = userId
    }
  },
  actions: {}
})
