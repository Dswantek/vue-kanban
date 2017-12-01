<template>
    <div>
        <div class="list-content">
            <h4>{{list.name}}</h4>
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
        <!-- BEGIN MODAL -->

        <div class="tasks-content">
            <div v-for="task in tasks">
                <router-link :to="'/tasks/' + task._id">{{task.name}}</router-link>
                <span class="delete-button glyphicon glyphicon-remove-circle pull-right" @click="removeTask(task)"></span>
                <p>{{task.description}}</p>
            </div>
        </div>

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
                task: {
                    name: '',
                    description: ''
                }
            }
        },
        props: ['list'],
        mounted() {
            this.$store.dispatch('getList', this.$route.params.id),
                this.$store.dispatch('getTasksByList', this.$route.params.id)
        },
        computed: {
            tasks() {
                return this.$store.state.tasks
            }
            // board(){
            //     return this.$store.state.activeBoard
            // }
        },
        methods: {
            createTask() {
                var newTask = {
                    nam: this.name,
                    description: this.description,
                    listId: this.list._id,
                    boardId: this.list.board._id
                }
                this.$store.dispatch('createTask', newTask)
                this.task = {
                    name: '',
                    description: ''
                }
            },
            getTasksByList(taskId) {
                this.$store.dispatch('getTasksByList', taskId)
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