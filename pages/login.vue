<template>
  <v-row no-gutters align="center" justify="center" class="fill-height">
    <DefaultDialog
      :dialog.sync="dialog"
      :dialog-width="'540'"
      :persistent="true"
    >
      <Login slot="content"></Login>
    </DefaultDialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: true,
    }
  },
}
</script>
