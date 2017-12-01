<template>
    <div>
        <div class="list-content">
            <div v-for="list in lists">
                <router-link :to="'/lists/' + list._id">{{list.name}}</router-link>
                <span class="delete-button glyphicon glyphicon-remove-circle pull-right" @click="removeList(list)"></span>
                <p>{{list.description}}</p>

                <div id="addTaskModal" class="modal fade" role="dialog">
                    <div class="modal-dialog">
                        <!-- Modal SIGN UP WINDOW -->
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title text-center">Make a New Task</h4>
                            </div>
                            <!-- EMAIL INPUT FORM -->
                            <div class="modal-body">
                                <form type="submit" @submit.prevent="createTask">
                                    <div class="form-group">
                                        <label for="Title">Title:</label>
                                        <input type="text" class="form-control" placeholder="Task Title" required v-model="task.name">
                                    </div>
                                    <div class="form-group">
                                        <label for="Description">Description:</label>
                                        <textarea name="description" rows="10" cols="30" class="form-control" placeholder="Add description here" required v-model="task.description"></textarea>
                                    </div>
                                    <!-- SIGN UP BUTTON -->
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-success btn-center">Add Task</button>
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
                <button type="button" class="btn btn-info btn-md" style="margin-top: 1.5rem" data-toggle="modal" data-target="#addTaskModal">Add Task</button>
            </div>
        </div>
        <!-- BEGIN MODAL -->

        <!-- <div class="tasks-content">
                <div v-for="task in tasks">
                    <router-link :to="'/tasks/' + task._id">{{task.name}}</router-link>
                    <span class="delete-button glyphicon glyphicon-remove-circle pull-right" @click="removeTask(task)"></span>
                    <p>{{task.description}}</p>
                </div>
            </div> -->

    </div>


</template>

<script>
    export default {
        name: 'list',
        components: {
        },
        data() {
            return {
                task: {
                    name: '',
                    description: ''
                }
            }
        },
        mounted() {
        },
        computed: {
            tasks() {
                return this.$store.state.tasks
            },
            lists() {
                return this.$store.state.lists
            }
        },
        methods: {
            createTask() {
                this.$store.dispatch('createTask', this.task)
                this.task = {
                    name: '',
                    description: ''
                }
            },
            getTasksByBoard(listId) {
                this.$store.dispatch('getTasksByList', listId)
            },
            removeTask(task) {
                this.$store.dispatch('removetask', task)
            }
        }
    }
</script>

<style scoped>
    .delete-button {
        color: red;
    }
</style>