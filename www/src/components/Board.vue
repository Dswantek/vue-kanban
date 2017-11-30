<template>
  <div class="board-content">
    <router-link class="pull-left" :to="'/'">
      <button>Boards</button>
    </router-link>
    <div class="text-center">
      <h3>
        {{board.name}}
      </h3>
    </div>
    <button>Add List</button>
  </div>
</template>

<script>
  export default {
    name: 'board',

    mounted() {
      this.$store.dispatch('getBoard', this.$route.params.id)
    },
    methods: {
      setActiveBoard() {
        this.$store.dispatch('setActiveBoard')
      }
    },
    computed: {
      board() {
        return this.$store.state.activeBoard
      }
    }
  }
</script>

<style scoped>
  /* .board-content {} */
</style>