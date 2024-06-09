<template>
  <v-container>
    <PhotoForm v-if="photos.length < 12" @addPhoto="addPhotoToPhotos" />
    <div v-else>Лимит превышен</div>
    <v-row>
      <Photo v-for="photo in $store.getters.getAllPhotos" :key="photo.id" :photo="photo" />
    </v-row>
    <PhotoDialog />
  </v-container>
</template>

<script>
import Photo from '@/components/photos/Photo';
import PhotoForm from '@/components/photos/PhotoForm';
import PhotoDialog from '@/components/photos/PhotoDialog.vue';
export default {
  components: {
    Photo,
    PhotoForm,
    PhotoDialog,
  },
  data: () => ({
    photos: [],
    // currentPhoto: {},
    // isActive: false,
  }),
  mounted() {
    // this.fetchPhotos();
    this.$store.dispatch('fetchPhotos');
    // console.log(this.$store.dispatch('fetchPhotos'));
  },
  methods: {
    // fetchPhotos() {
    //   this.axios
    //     .get('https://jsonplaceholder.typicode.com/photos?_limit=10')
    //     .then((response) => (this.photos = response.data));
    // },
    addPhotoToPhotos(photo) {
      this.photos.push(photo);
    },
    openPhotoDialog(photo) {
      this.currentPhoto = photo;
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="scss" scoped></style>
