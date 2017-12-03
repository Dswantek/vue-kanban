<template>
    <div class="list-content">
        <div class="panel panel-success">
          <div class="panel-heading">
              <span class="delete-button glyphicon glyphicon-remove-circle pull-right" @click="removeTask(task)"></span>
              <h4>{{task.name}}</h4>
          </div>
            <div class="panel-body">
                <p>{{task.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'task',
        components: {

        },
        props:['task'],
        mounted() {

        },
        methods: {
            removeTask(task) {
                debugger
                this.$store.dispatch('removeTask', task)
            }
        },
        computed: {
            tasks() {
                return this.$store.state.tasks
            }
        }
    }
</script>

<style scoped>
    .delete-button {
        color: red;
    }
</style>