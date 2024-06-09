<template>
  <v-col @click="openPhoto" cols="4">
    <v-card>
      <v-card-title>{{ photo.title }}</v-card-title>
      <v-card-text>
        <v-img :src="photo.url" width="200" height="200" />
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    photo: {
      type: Object,
      required: true,
    },
  },
  name: 'Photo',
  methods: {
    openPhoto() {
      this.$store.commit('showDialog');
      this.$store.commit('setCurrentPhoto', this.photo);
    },
  },
};
</script>

<style lang="scss" scoped></style>
