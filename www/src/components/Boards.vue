<template>
  <div>
    <button type="button" class="btn btn-info btn-md" style="margin-top: 1.5rem" data-toggle="modal" data-target="#addBoardModal">Add Board</button>

    <!-- BEGIN MODAL -->
    <div id="addBoardModal" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <!-- Modal SIGN UP WINDOW -->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title text-center">Make a New Board</h4>
          </div>
          <!-- EMAIL INPUT FORM -->
          <div class="modal-body">
            <form type="submit" @submit.prevent="createBoard">
              <div class="form-group">
                <label for="Title">Title:</label>
                <input type="text" class="form-control" placeholder="Board Title" required v-model="board.name">
              </div>
              <div class="form-group">
                <label for="Description">Description:</label>
                <textarea name="description" rows="10" cols="30" class="form-control" placeholder="Add description here" required v-model="board.description"></textarea>
              </div>
              <!-- SIGN UP BUTTON -->
              <div class="form-group">
                <button type="submit" class="btn btn-success btn-center">Add Board</button>
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




    <div class="boards-content text-center">
      <div class="row">
        <div v-for="board in boards">
          <div class="col-xs-10 col-md-4 text-center">
            <div class="panel panel-danger">

              <div class="panel-heading">
                <router-link :to="'/boards/' + board._id">
                  <h3>{{board.name}}</h3>
                </router-link>
                <span class="delete-button glyphicon glyphicon-remove-circle pull-right" @click="removeBoard(board)"></span>
              </div>
              <div class="panel-body">
                <p>{{board.description}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>

</template>

<script>
  import Board from './Board'
  export default {
    name: 'boards',
    components: {
      Board
    },
    data() {
      return {
        board: {
          name: '',
          description: ''
        }
      }
    },
    mounted() {
      this.$store.dispatch('getBoards')
    },
    computed: {
      boards() {
        return this.$store.state.boards
      },
      activeBoard() {
        return this.$store.state.activeBoard
      }
    },
    methods: {
      createBoard() {
        this.$store.dispatch('createBoard', this.board)
        this.board = {
          name: '',
          description: ''
        }
      },
      setActiveBoard(board) {
        this.$store.dispatch('setActiveBoard', board)
      },
      removeBoard(board) {
        this.$store.dispatch('removeBoard', board)
      }
    }
  }
</script>

<style scoped>
  .delete-button {
    color: red;
  }

  .btn {
    margin-bottom: 6vh;
  }

  .panel-heading {
    align-items: center;
  }

  .panel-body {
    align-content: center;
  }
</style>