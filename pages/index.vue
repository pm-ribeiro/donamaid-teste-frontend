<template>
  <v-col cols="12" class="pa-0 px-8">
    >> {{ $login.loggedIn() }}
    <v-row
      no-gutters
      align="center"
      justify="space-between"
      class="px-4 mb-6 mt-10"
    >
      <h1 class="text-h4">Donies</h1>
    </v-row>
    <v-row no-gutters align="center" justify="start">
      <v-col
        v-for="(donie, index) in donies"
        :key="index"
        cols="12"
        xl="3"
        lg="3"
        class="pa-4"
      >
        <v-sheet
          rounded
          :height="isHydrated && $vuetify.breakpoint.xl ? '400' : '300'"
          color="#F8F8F8"
          class="py-6 text-center"
        >
          <nuxt-link :to="`/donies/${getId(donie.url)}`">
            <v-avatar
              color="white"
              :size="isHydrated && $vuetify.breakpoint.xl ? '264' : '164'"
            >
              <v-img
                id="activator-button"
                :src="
                  donie.image
                    ? donie.image
                    : $representers.getAssetsImage('default_avatar.png')
                "
                alt="Profile picture"
              ></v-img>
            </v-avatar>
          </nuxt-link>

          <h2 class="text-h5 text-capitalize mt-6 mb-2">
            {{ donie.name }}
          </h2>

          <span>
            Com a donamaid desde
            {{ $representers.ddmmyyyy(donie.created) }}
          </span>
        </v-sheet>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      isHydrated: false,
      donies: [],
    }
  },
  beforeMount() {
    this.fetchData()
  },
  mounted() {
    this.isHydrated = true
  },
  methods: {
    getId(donieURL) {
      let pathname = new URL(donieURL).pathname
      pathname = pathname.split('/')
      return pathname[3]
    },
    async fetchData() {
      try {
        const donies = await this.$axios.get('/people/')
        this.donies = donies.data.results
        console.log(donies)
      } catch (error) {
        console.log(error)
      }
    },
    doniePage(id) {
      this.$router.push('/people/' + id)
    },
  },
}
</script>

<style lang="scss">
#activator-button {
  cursor: pointer;
}
</style>
