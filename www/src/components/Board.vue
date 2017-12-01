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
    <button type="button" class="btn btn-info btn-md" style="margin-top: 1.5rem" data-toggle="modal" data-target="#addListModal">Add Lists</button>
    <!-- BEGIN MODAL -->
    <div id="addListModal" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <!-- Modal SIGN UP WINDOW -->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title text-center">Make a New List</h4>
          </div>
          <!-- EMAIL INPUT FORM -->
          <div class="modal-body">
            <form type="submit" @submit.prevent="createList">
              <div class="form-group">
                <label for="Title">Title:</label>
                <input type="text" class="form-control" placeholder="List Title" required v-model="list.name">
              </div>
              <div class="form-group">
                <label for="Description">Description:</label>
                <textarea name="description" rows="10" cols="30" class="form-control" placeholder="Add description here" required v-model="list.description"></textarea>
              </div>
              <!-- SIGN UP BUTTON -->
              <div class="form-group">
                <button type="submit" class="btn btn-success btn-center">Add List</button>
              </div>
            </form>
          </div>
          <!-- MODAL CLOSE -->
          <div class="modal-footer">
            <button type="button" class="btn btn-danger btn-center" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <list></list>
  </div>
</template>

<script>
  import List from './List'
  export default {
    name: 'board',
    data() {
      return {
        list: {
          name: '',
          description: ''
        }
      }
    },
    components: {
      List
    },
    mounted() {
      this.$store.dispatch('getBoard', this.$route.params.id),
        this.$store.dispatch('getListsByBoard', this.$route.params.id)
    },
    methods: {
      setActiveBoard() {
        this.$store.dispatch('setActiveBoard')
      },
      createList() {
        var newList = {
          name: this.list.name,
          description: this.list.description,
          boardId: this.board._id
        }
        this.$store.dispatch('createList', newList)
        this.list = {
          name: '',
          description: ''
        }
      },
      removeList(list) {
        this.$store.dispatch('removeList', list)
      }
    },
    computed: {
      board() {
        return this.$store.state.activeBoard
      },
      lists() {
        return this.$store.state.lists
      }
    }
  }
</script>

<style scoped>
  /* .board-content {} */
</style>