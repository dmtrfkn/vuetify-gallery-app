<template>
  <v-dialog
    v-model="$store.getters.getIsVisible"
    @click:outside="$store.commit('hideDialog')"
    max-width="600"
  >
    <v-card>
      <v-card-title>{{ full_title }}</v-card-title>
      <v-card-text>
        <v-img :src="$store.getters.getCurrentPhoto.url" width="200" height="200" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  computed: {
    full_title() {
      return 'Название фотографии - ' + this.$store.getters.getCurrentPhoto.title;
    },
  },
};
</script>

<style lang="scss" scoped></style>
