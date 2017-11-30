<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <nav class="navbar navbar-default navbar-fixed-top">
          <!-- WEBSITE NAME -->
          <div class="navbar-text col-xs-12 col-md-4" style="font-family: 'Rock Salt', cursive">
            <h3>Track-It</h3>
          </div>
          <!-- FORMS -->
          <login></login>
        </nav>

      </div>
      <!-- End Content Section -->
    </div>
    <!-- End of Container -->
  <router-view></router-view>
  </div>
</template>

<script>
  import Login from './components/Login'
  export default {
    name: 'app',
    components: {
      Login
    },
    mounted() {
      this.$store.dispatch('authenticate')
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>