import Vue from 'vue'

export default ({ store }) => {
  Vue.prototype.$login = {
    login: () => {
      store.commit('login/login')
    },
    logout: () => {
      store.commit('login/logout')
    },
    loggedIn: () => store.state.login.loggedIn,
  }
}
