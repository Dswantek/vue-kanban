<template>
    <div>
        <div class="list-content">
            <h4>{{listprop.name}}</h4>
            <span class="delete-button glyphicon glyphicon-remove-circle pull-right" @click="removeList(listprop)"></span>
            <p>{{listprop.description}}</p>

            <div :id="listprop._id" class="modal fade" role="dialog">
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
            <div v-for="task in tasks" class="task-content">
                <task :task="task"></task>
            </div>
            <button type="button" class="btn btn-info btn-md" style="margin-top: 1.5rem" data-toggle="modal" :data-target="target">Add Task</button>
        </div>
        <!-- BEGIN MODAL -->


    </div>


</template>

<script>
    import Task from './Task'
    export default {
        name: 'list',
        components: {
            Task
        },
        data() {
            return {
                target: '#'+this.listprop._id,
                task: {
                    name: '',
                    description: ''
                }
            }
        },
        props: ['listprop'],
        mounted() {
            this.$store.dispatch('getTasksByList', { boardId: this.listprop.boardId, listId: this.listprop._id})
        },
        computed: {
            tasks() {
                return this.$store.state.tasks[this.listprop._id]
            },
            board() {
                return this.$store.state.activeBoard
            }
        },
        methods: {
            createTask() {
                var newTask = {
                    name: this.task.name,
                    description: this.task.description,
                    listId: this.listprop._id,
                    boardId: this.listprop.boardId
                }
                this.$store.dispatch('createTask', newTask)
                this.task = {
                    name: '',
                    description: ''
                }
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