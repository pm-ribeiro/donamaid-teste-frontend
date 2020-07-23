<template>
  <v-app>
    <v-app-bar fixed app flat color="accent">
      <nuxt-link :to="$login.loggedIn() ? '/' : '/login'">
        <v-img
          :src="$representers.getAssetsImage(donamaidLogo)"
          alt="Donamaid"
          width="160"
          contain
        ></v-img>
      </nuxt-link>
      <v-spacer></v-spacer>

      <v-btn v-if="$login.loggedIn()" text color="white" @click="logout()">
        sair
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer absolute app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: this.$route.query.loggedIn,
    }
  },
  computed: {
    donamaidLogo() {
      return 'donamaid-logo-branco.svg'
    },
  },
  methods: {
    logout() {
      this.$login.logout()
      this.$router.push('/login')
    },
  },
}
</script>

<style lang="scss">
.v-snack:not(.v-snack--has-background) .v-snack__wrapper {
  background: white !important;
}

.fill-height {
  min-height: calc(100vh - 124px);
}
</style>
