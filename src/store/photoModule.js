import axios from 'axios';
export default {
  state: {
    photos: [],
    isVisible: false,
    currentPhoto: {},
  },
  mutations: {
    setPhotos(state, payload) {
      state.photos = payload;
    },
    showDialog(state) {
      state.isVisible = true;
    },
    hideDialog(state) {
      state.isVisible = false;
    },
    setCurrentPhoto(state, payload) {
      state.currentPhoto = payload;
    },
  },
  getters: {
    getAllPhotos(state) {
      return state.photos;
    },
    getIsVisible(state) {
      return state.isVisible;
    },
    getCurrentPhoto: (state) => {
      return state.currentPhoto;
    },
  },
  actions: {
    fetchPhotos(context) {
      axios
        .get('https://jsonplaceholder.typicode.com/photos?_limit=10')
        .then((response) => context.commit('setPhotos', response.data));
    },
  },
};
