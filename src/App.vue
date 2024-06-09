<template>
  <v-app>
    <Navbar />
    <router-view />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';
export default {
  components: {
    Navbar,
  },
  name: 'App',
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
