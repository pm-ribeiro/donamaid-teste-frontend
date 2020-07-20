<template>
  <v-app>
    <v-app-bar fixed app color="accent">
      <nuxt-link to="/">
        <v-img
          :src="$representers.getAssetsImage(donamaidLogo)"
          alt="Donamaid"
          width="160"
          contain
        ></v-img>
      </nuxt-link>
      <v-spacer></v-spacer>

      <v-btn v-if="loggedIn" text color="primary" @click="$auth.logout()">
        sair
      </v-btn>

      <v-btn
        v-if="loggedIn"
        text
        color="primary"
        icon
        class="ml-8 mr-6"
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
      >
        <v-icon>
          {{ $vuetify.theme.dark ? 'mdi-brightness-2' : 'mdi-brightness-7' }}
        </v-icon>
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
      loggedIn: false,
    }
  },
  computed: {
    donamaidLogo() {
      return 'donamaid-logo-branco.svg'
    },
  },
}
</script>

<style lang="scss">
.v-snack:not(.v-snack--has-background) .v-snack__wrapper {
  background: white !important;
}

.fill-height {
  height: calc(100vh - 124px);
}
</style>
