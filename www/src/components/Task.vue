<template>
    <div class="task-content">
        <div class="panel panel-success">
            <div class="panel-heading">
                <span class="delete-button glyphicon glyphicon-remove-circle pull-right" @click="removeTask(task)"></span>
                <h4>{{task.name}}</h4>
            </div>
            <div class="panel-body">
                <p>{{task.description}}</p>
                <div v-for="comment in comments">
                    <ul>
                        <li>
                            {{comment.text}}
                        </li>
                    </ul>
                </div>
                <form @submit.prevent="addComment">
                    <div class="form-group" >
                        <input class="form-control" type="text" placeholder="Add comment here" v-model="comment.text" required>
                    </div>
                    <div class="form-group">
                        <button type="submit" @click="addComment">Add Comment</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'task',
        data (){
            return {
                comment: {}
            }
        },
        components: {

        },
        props: ['task'],
        mounted() {
            this.$store.dispatch('getCommentsByTask', { taskId: this.comment.taskId })
        },
        methods: {
            removeTask(task) {
                debugger
                this.$store.dispatch('removeTask', task)
            },
            addComment(){  
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
            removeComment(comment){
                this.$store.dispatch('removeComment')
            }
        },
        computed: {
            tasks() {
                return this.$store.state.tasks
            }, 
            comments() {
                return this.$store.state.comments
            }
        }
    }
</script>

<style scoped>
    .delete-button {
        color: red;
    }
</style>