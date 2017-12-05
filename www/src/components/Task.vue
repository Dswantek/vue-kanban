<template>
<<<<<<< HEAD
    
        <div class="task-content">
=======
        <div class="task-content" draggable="true" v-on:dragstart.capture="moving">
>>>>>>> 1fca89b5f3c8851e5aa98690215227aaff9a7918
            <div class="panel panel-success">
                <div class="panel-heading text-center">
                    <div class="row">
                        <span class="delete-button glyphicon glyphicon-remove-circle pull-right" @click="removeTask(task)"></span>
                    </div>
                    <div class="row">
                        <h4>{{task.name}}</h4>
                        <p>{{task.description}}</p>
                    </div>
                </div>
                <div class="panel-body">
                    <div v-for="comment in comments">
                        <div class="row">
                            <ul class="text-left">
                                <li>
                                    <div class="col-xs-8">
                                        {{comment.text}}
                                    </div>
                                    <div class="col-xs-1 pull-right">
                                        <span class="glyphicon glyphicon-trash pull-right" @click="removeComment(comment)"></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <form @submit.prevent="addComment">
                        <div class="form-group">
                            <input class="form-control" type="text" placeholder="Add comment here" v-model="comment.text" required>
                        </div>
                        <div class="form-group">
                            <button type="submit" @click="addComment">Add Comment</button>
                        </div>
                        <div>
                            <!-- <form @submit.prevent="moveTask">
                                <select @change="moveTask" v-model="selectedList">
                                    <option :value="list" v-for="list in lists">{{list.name}}</option>
                                </select>
                            </form> -->
                        </div>
                    </form>
                </div>
            </div>
        </div>
</template>

<script>
    import list from './List'
    export default {
        name: 'task',
        data() {
            return {
                comment: {}
            }
        },
        components: {
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
            moving(event){
                console.log(event)
                event.dataTransfer.setData('text/javascript', JSON.stringify(this.task))
                console.log('We are Moving')
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

    ul {
        list-style-type: none;
    }
</style>