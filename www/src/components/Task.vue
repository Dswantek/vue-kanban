<template>
    <draggable :options="{group: 'tasks'}">
        <!-- v-model='movingTask' ondragover="event.preventDefault()" onend="updateTask" -->
        <div class="task-content">
            <div class="panel panel-success">
                <div class="panel-heading text-center">
                    <!-- <span class="glyphicon glyphicon-plus pull-left"> -->
                    <!-- </span> -->
                    <span class="delete-button glyphicon glyphicon-remove-circle pull-right" @click="removeTask(task)"></span>
                    <h4>{{task.name}}</h4>
                    <p>{{task.description}}</p>
                </div>
                <div class="panel-body">
                    <div v-for="comment in comments">
                        <ul>
                            <li>
                                {{comment.text}}
                                <span class="glyphicon glyphicon-trash pull-right" @click="removeComment(comment)"></span>
                            </li>
                        </ul>
                    </div>
                    <form @submit.prevent="addComment">
                        <div class="form-group">
                            <input class="form-control" type="text" placeholder="Add comment here" v-model="comment.text" required>
                        </div>
                        <div class="form-group">
                            <button type="submit" @click="addComment">Add Comment</button>
                        </div>

                        <div>
                            <form @submit.prevent="moveTask">
                                <select @change="moveTask" v-model="selectedList">
                                    <option :value="list" v-for="list in lists">{{list.name}}</option>
                                </select>
                            </form>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </draggable>
</template>

<script>
    import list from './List'
    import draggable from 'vuedraggable'
    export default {
        name: 'task',
        data() {
            return {
                comment: {},
                movingTask: {}
            }
        },
        components: {
            draggable,
            list
        },
        props: ['task'],
        mounted() {
            this.$store.dispatch('getCommentsByTask', { boardId: this.task.boardId, listId: this.task.listId, taskId: this.task._id })
        },
        methods: {
            removeTask(task) {
                this.$store.dispatch('removeTask', task)
            },
            addComment() {
                var comment = {
                    text: this.comment.text,
                    listId: this.task.listId,
                    boardId: this.task.boardId,
                    taskId: this.task._id
                }
                this.$store.dispatch('addComment', comment)
                this.comment = {
                    text: '',
                    listId: '',
                    boardId: '',
                    taskId: ''
                }
            },
            removeComment(comment) {
                this.$store.dispatch('removeComment', comment)
            },
            updateTask(event) {
                console.log(event)
            },
            moveTask(task){
                this.$store.dispatch('setTasks', task)
            }
        },
        computed: {
            tasks() {
                return this.$store.state.tasks[this.task.listId]
            },
            comments() {
                return this.$store.state.comments[this.task._id]
            },
            lists() {
                return this.$store.state.lists
            }
        }
    }
</script>

<style scoped>
    .delete-button {
        color: red;
    }
</style>