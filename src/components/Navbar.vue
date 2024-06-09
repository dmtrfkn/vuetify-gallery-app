<template>
  <v-container fluid class="pa-0">
    <v-app-bar color="primary" dark>
      <v-spacer></v-spacer>
      <v-btn outlined class="ml-3" @click="$router.push('/')">Главная</v-btn>
      <v-btn outlined class="ml-3" @click="$router.push('/photos')">Фотографии</v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
export default { name: 'Navbar' };
</script>

<style scoped></style>
