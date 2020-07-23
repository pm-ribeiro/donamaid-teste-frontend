export const state = () => ({
  loggedIn: false,
})

export const mutations = {
  login(state) {
    state.loggedIn = true
  },
  logout(state) {
    state.loggedIn = false
  },
}

export const actions = {
  login(context, payload) {
    context.commit('login', payload)
  },
  logout(context) {
    context.commit('logout')
  },
}

export const strict = false
