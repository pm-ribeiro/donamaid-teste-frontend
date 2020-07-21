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
        style="border: 1px solid orange;"
      >
        <v-row no-gutters align="start" justify="start">
          <v-col cols="6" xl="4" lg="4">
            <v-avatar color="white" :size="avatarSize">
              <v-img :src="$representers.getAssetsImage('donie.svg')"></v-img>
            </v-avatar>
          </v-col>
          <v-col cols="6" xl="8" lg="8">
            <div
              :class="
                isHydrated && $vuetify.breakpoint.mobile
                  ? 'black--text ml-1 mt-10'
                  : 'white--text ml-12 mt-10'
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
          class="mt-5 mt-lg-n16 mt-xl-n16"
          style="border: 1px solid green;"
        >
          <v-col
            cols="12"
            xl="7"
            lg="7"
            offset-xl="4"
            offset-lg="4"
            class="pl-xl-10 pl-lg-10"
            style="border: 1px dashed red;"
          >
            <p class="ma-0 pa-0 text-xl-h6 font-weight-regular">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,
              eaque. Voluptatibus sed autem, veniam expedita assumenda magnam
              incidunt impedit cumque, rerum enim quasi quisquam nesciunt
              repudiandae dolore veritatis molestiae fugit.
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,
              eaque. Voluptatibus sed autem, veniam expedita assumenda magnam
              incidunt impedit cumque, rerum enim quasi quisquam nesciunt
              repudiandae dolore veritatis molestiae fugit.
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,
              eaque. Voluptatibus sed autem, veniam expedita assumenda magnam
              incidunt impedit cumque, rerum enim quasi quisquam nesciunt
              repudiandae dolore veritatis molestiae fugit.
            </p>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" xl="4" lg="4" style="border: 1px solid blue;">Olá</v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      isHydrated: false,
    }
  },
  computed: {
    avatarSize() {
      if (this.$vuetify.breakpoint.xl) {
        return 380
      } else if (this.$vuetify.breakpoint.lg) {
        return 280
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
  border: 1px solid blue;
  .left-column {
    padding-top: 60px;
    padding-left: 60px;
    @media only screen and (min-width: 1920px) {
      padding-top: 100px;
      padding-left: 100px;
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
    height: 60%;
    background-color: #af006b;
    overflow: hidden;
  }

  &__inner-shape {
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 0;
    width: 150%;
    height: 100%;
    background-color: white;
    transform: rotate(-8deg);
  }
}
</style>
