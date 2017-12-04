<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <nav class="navbar navbar-default navbar-fixed-top myNavbar">
          <!-- WEBSITE NAME -->
          <div class="navbar-text col-xs-12 col-md-4" style="font-family: 'Rock Salt', cursive">
            <h3>Trak-It</h3>
            <!-- <h5>(Tac-It)</h5> -->
          </div>
          <!-- FORMS -->
          <login></login>
        </nav>
        <signup></signup>
      </div>
      <!-- End Content Section -->
      <div class="page-content">
        <router-view></router-view>
      </div>
    </div>
    <!-- End of Container -->
  </div>
</template>

<script>
  import Login from './components/Login'
  import Signup from './components/Signup'
  export default {
    name: 'app',
    components: {
      Login,
      Signup
    },
    mounted() {
      this.$store.dispatch('authenticate')
    }
  }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .page-content{
    margin-top: 20vh;
  }

  .myNavbar{
    background-color: #95ccf6;
  }
</style>