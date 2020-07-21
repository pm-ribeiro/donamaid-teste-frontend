<template>
  <v-row no-gutters align="start" justify="start">
    <div
      v-if="isHydrated && $vuetify.breakpoint.smAndUp"
      class="background__outer-shape"
    >
      <div class="background__inner-shape"></div>
    </div>
    <v-row no-gutters align="start" justify="center" class="fill-height root">
      <v-col
        cols="12"
        xl="8"
        lg="8"
        :class="
          isHydrated && $vuetify.breakpoint.smAndUp
            ? 'left-column'
            : 'px-3 pt-6'
        "
      >
        <v-row no-gutters align="start" justify="start" class="mt-lg-8">
          <v-col cols="6" xl="4" lg="4">
            <v-avatar color="white" :size="avatarSize">
              <v-img
                :src="$representers.getAssetsImage('default_avatar.png')"
              ></v-img>
            </v-avatar>
          </v-col>
          <v-col cols="6" xl="8" lg="8">
            <div
              :class="
                isHydrated && $vuetify.breakpoint.mobile
                  ? 'black--text ml-1 mt-10'
                  : 'white--text ml-4 mt-10'
              "
            >
              <h1 class="text-h6 text-xl-h3 text-lg-h5">
                Patrícia Moreno Ribeiro
              </h1>
              <h2 class="text-subtitle-1 text-xl-h5 text-lg-h6 mt-2">
                Com a donamaid desde XXXX
              </h2>
            </div>
          </v-col>
        </v-row>
        <v-row
          no-gutters
          align="start"
          justify="start"
          class="mt-5 mt-lg-n12 mt-xl-n16"
        >
          <v-col
            cols="12"
            xl="7"
            lg="7"
            offset-xl="4"
            offset-lg="4"
            class="pl-xl-10 pl-lg-10"
          >
            <p class="ma-0 pa-0 text-xl-h6 font-weight-regular">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,
              eaque. Voluptatibus sed autem, veniam expedita assumenda magnam
              incidunt impedit cumque, rerum enim quasi quisquam nesciunt
              repudiandae dolore veritatis molestiae fugit.
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, .
            </p>

            <v-row no-gutters align="center" justify="center" class="mt-16">
              <v-btn color="primary" rounded x-large depressed>
                Quero contratar XXXXXX
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        xl="4"
        lg="4"
        class="pb-lg-0 pb-xl-16 py-4 px-8 fill-height d-flex flex-column justify-start justify-lg-end justify-xl-end"
      >
        <v-list
          two-line
          color="#F8F8F8"
          :height="isHydrated && $vuetify.breakpoint.xl ? '500' : '360'"
          style="overflow: auto;"
          class="rounded mb-lg-n10 mb-xl-2"
        >
          <template v-for="(item, index) in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
              v-text="item.header"
            ></v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-item v-else :key="item.title" @click="a = true">
              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title> {{ item.title }} </v-list-item-title>
                <v-list-item-subtitle>
                  {{ item.subtitle }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      isHydrated: false,
      items: [
        { header: 'Outros profissionais' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Fulano 1',
          subtitle: 'Na donamaid desde XXXX',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Fulano 2',
          subtitle: 'Na donamaid desde XXXX',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Fulano 2',
          subtitle: 'Na donamaid desde XXXX',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Fulano 2',
          subtitle: 'Na donamaid desde XXXX',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Fulano 2',
          subtitle: 'Na donamaid desde XXXX',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Fulano 2',
          subtitle: 'Na donamaid desde XXXX',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Fulano 2',
          subtitle: 'Na donamaid desde XXXX',
        },
      ],
    }
  },
  computed: {
    avatarSize() {
      if (this.$vuetify.breakpoint.xl) {
        return 340
      } else if (this.$vuetify.breakpoint.lg) {
        return 240
      } else if (this.$vuetify.breakpoint.mobile) {
        return 180
      } else {
        return 0
      }
    },
  },
  mounted() {
    this.isHydrated = true
  },
}
</script>

<style lang="scss" scoped>
.root {
  position: relative;
  z-index: 1;

  .left-column {
    padding-left: 60px;
    @media only screen and (min-width: 1920px) {
      padding-top: 36px;
      padding-left: 80px;
    }
  }
}
.background {
  &__outer-shape {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 45%;
    background-color: #af006b;
    overflow: hidden;
  }

  &__inner-shape {
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 0;
    width: 160%;
    height: 100%;
    background-color: white;
    transform: rotate(-6deg);
  }
}
</style>
