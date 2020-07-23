<template>
  <v-row no-gutters align="center" justify="center" class="fill-height">
    <v-sheet
      outlined
      rounded
      color="#EDEDED"
      width="540"
      min-height="600"
      elevation="5"
      class="px-5 pt-4 pb-10 login-sheet"
    >
      <div class="login-sheet__donie-container">
        <v-img
          :src="$representers.getAssetsImage('donie.svg')"
          alt="Donie"
          width="232"
          height="185"
          contain
          class="login-sheet__donie-image"
        />
      </div>
      <div class="login-sheet__inner-container">
        <v-img
          :src="$representers.getAssetsImage('donamaid-logo.svg')"
          alt="Donamaid"
          width="400"
          class="mb-10"
        />

        <v-text-field
          v-model="email"
          class="login-sheet__text-field"
          label="E-mail"
          type="email"
          :rules="[$validations.required('e-mail'), $validations.email()]"
        >
          <template v-slot:prepend-inner>
            <v-icon class="ml-1 mr-3 mb-2">mdi-account</v-icon>
          </template>
        </v-text-field>

        <v-text-field
          v-model="password"
          class="login-sheet__text-field my-3"
          label="Senha"
          :rules="[$validations.required('senha')]"
          :type="showPassword ? 'text' : 'password'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        >
          <template v-slot:prepend-inner>
            <v-icon class="ml-1 mr-3 mb-2">mdi-lock</v-icon>
          </template>
        </v-text-field>

        <v-btn
          color="primary"
          depressed
          dark
          class="mt-10 mb-5"
          @click="login()"
        >
          entrar
        </v-btn>
        <p class="accent--text">Esqueci minha senha.</p>
      </div>
      <p class="caption text-center ma-0 mt-12">
        Ainda não tem cadastro? Faça <a href="">aqui</a>.
      </p>
    </v-sheet>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
    }
  },
  methods: {
    login() {
      this.$login.login()
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
.login-sheet {
  &.rounded {
    border-radius: 36px !important;
  }
  &__donie {
    &-container {
      position: relative;
      height: 185px;
      display: flex;
      justify-content: center;
    }
    &-image {
      z-index: 3;
      position: absolute;
      bottom: -27px;
    }
  }
  &__inner-container {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 48px 36px 24px 36px;
    margin: 0 24px 24px 24px;
    background-color: white;
  }
  &__text-field {
    width: 384px;
  }
}
</style>
