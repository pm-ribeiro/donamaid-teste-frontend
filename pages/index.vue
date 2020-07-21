<template>
  <v-col cols="12" class="pa-0 px-8">
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
          <nuxt-link :to="`/donies/${index}`">
            <v-avatar
              color="white"
              :size="isHydrated && $vuetify.breakpoint.xl ? '264' : '164'"
            >
              <v-img
                id="activator-button"
                :src="
                  donie.url == 'default_avatar'
                    ? $representers.getAssetsImage('default_avatar.png')
                    : donie.url
                "
                alt="Profile picture"
              ></v-img>
            </v-avatar>
          </nuxt-link>

          <h2 class="text-h5 text-capitalize mt-6 mb-2">
            {{ donie.name }}
          </h2>

          <span>Com a donamaid desde {{ donie.companyTime }}</span>
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
      donies: [
        {
          name: 'fulano 1',
          companyTime: '2018',
          url: 'default_avatar',
        },
        {
          name: 'fulano 1',
          companyTime: '2018',
          url: 'default_avatar',
        },
        {
          name: 'fulano 1',
          companyTime: '2018',
          url: 'default_avatar',
        },
        {
          name: 'fulano 1',
          companyTime: '2018',
          url: 'default_avatar',
        },
        {
          name: 'fulano 1',
          companyTime: '2018',
          url: 'default_avatar',
        },
        {
          name: 'fulano 1',
          companyTime: '2018',
          url: 'default_avatar',
        },
        {
          name: 'fulano 1',
          companyTime: '2018',
          url: 'default_avatar',
        },
      ],
    }
  },
  mounted() {
    this.isHydrated = true
  },
}
</script>

<style lang="scss">
#activator-button {
  cursor: pointer;
}
</style>
