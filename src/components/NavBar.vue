<template>
  <div>
    <div class="mb-2">
      <b-navbar toggleable="sm" type="light" variant="light">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-navbar-brand class="ml-3 mr-4">Guillaume P. - DW3</b-navbar-brand>

        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-text class="mr-3"><router-link to="/">Films </router-link></b-nav-text>
            <b-nav-text class="mr-3"><router-link to="/favoris">Favoris</router-link></b-nav-text>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {}
};
</script>

<style>
.router-link-active {
  text-decoration: none;
  color: #fff;
}

</style>
