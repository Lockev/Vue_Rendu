<template>
  <div>
    <h1>Favoris</h1>
    <div v-for="film in favorites" :key="film.imdbID">
      <Card :film="film"></Card>
    </div>
  </div>
</template>

<script>
import Card from "./../components/Card.vue";

export default {
  name: "Favoris",
  components: {
    Card
  },
  props: {},
  data() {
    return {
      favorites: this.$store.getters.favorites
    };
  }
};
</script>

<style></style>
