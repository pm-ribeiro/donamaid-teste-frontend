<template>
  <v-list
    two-line
    color="#F8F8F8"
    :height="isHydrated && $vuetify.breakpoint.xl ? '500' : '360'"
    style="overflow: auto;"
    class="rounded mb-lg-n10 mb-xl-2"
  >
    <v-subheader>Outros profissionais</v-subheader>
    <template v-for="(item, index) in otherDonies">
      <v-divider v-if="index > 0" :key="index" inset></v-divider>

      <v-list-item
        :key="item.title"
        :to="`/donies/${$representers.getId(item.url)}`"
      >
        <v-list-item-avatar>
          <v-img
            :src="
              item.avatar
                ? item.avatar
                : $representers.getAssetsImage('default_avatar.png')
            "
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title> {{ item.name }} </v-list-item-title>
          <v-list-item-subtitle>
            Com a Donamaid desde
            {{ $representers.ddmmyyyy(item.created) }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      isHydrated: false,
      otherDonies: [],
    }
  },
  beforeMount() {
    this.fetchDonies()
  },
  mounted() {
    this.isHydrated = true
  },
  methods: {
    async fetchDonies() {
      try {
        const donies = await this.$axios.get('https://swapi.dev/api/people/')
        this.otherDonies = donies.data.results
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
