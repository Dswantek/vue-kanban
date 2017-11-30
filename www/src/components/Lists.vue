<template>
    <div>
        <button type="button" class="btn btn-info btn-md" style="margin-top: 1.5rem" data-toggle="modal" data-target="#addListModal">Add List</button>

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

        <div class="lists-content">
            <div v-for="list in lists">
                <router-link :to="'/lists/' + list._id">{{list.name}}</router-link>
                <span class="delete-button glyphicon glyphicon-remove-circle pull-right" @click="removeList(list)"></span>
                <p>{{list.description}}</p>
            </div>
        </div>

    </div>
    

</template>

<script>
    import List from './List'
    export default {
        name: 'lists',
        components: {
            List
        },
        data() {
            return {
                list: {
                    name: '',
                    description: ''
                }
            }
        },
        mounted() {
            // this.$store.dispatch('getListsByBoard', board)
        },
        computed: {
            lists() {
                return this.$store.state.lists
            },
            // activeBoard() {
            //     return this.$store.state.activeBoard
            // }
        },
        methods: {
            createList() {
                this.$store.dispatch('createList', this.list)
                this.list = {
                    name: '',
                    description: ''
                }
            },
            getListsByBoard(boardId){
                this.$store.dispatch('getListsByBoard', boardId)
            },
            // setActiveList(list) {
            //     this.$store.dispatch('setActiveList', list)
            // },
            removeList(list) {
                this.$store.dispatch('removeList', list)
            }
        }
    }
</script>

<style scoped>
    .delete-button {
        color: red;
    }
</style>