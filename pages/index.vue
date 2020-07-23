<template>
  <v-row
    v-if="loading"
    no-gutters
    align="center"
    justify="center"
    class="fill-height"
  >
    <div class="text-center">
      <h2>Carregando dados...</h2>
      <v-progress-circular
        :width="10"
        :size="200"
        indeterminate
        color="accent"
        class="mt-8"
      ></v-progress-circular>
    </div>
  </v-row>
  <v-col v-else cols="12" class="pa-0 px-8">
    <v-row
      no-gutters
      align="center"
      justify="space-between"
      class="px-4 mb-6 mt-10"
    >
      <h1 class="text-h4">Donies</h1>
    </v-row>

    <!-- professionals list -->
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
          <nuxt-link :to="`/donies/${$representers.getId(donie.url)}`">
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
      loading: false,
    }
  },
  beforeMount() {
    this.fetchData()
  },
  mounted() {
    this.isHydrated = true
  },
  methods: {
    async fetchData() {
      try {
        if (this.$login.loggedIn()) {
          this.loading = true
          const donies = await this.$axios.get('https://swapi.dev/api/people/')
          this.donies = donies.data.results
          this.loading = false
        } else {
          this.$router.push('/login')
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style lang="scss">
#activator-button {
  cursor: pointer;
}
</style>
