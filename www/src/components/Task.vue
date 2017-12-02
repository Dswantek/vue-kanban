<template>
    <div class="list-content">
        <h4>{{task.name}}</h4>
        <span class="delete-button glyphicon glyphicon-remove-circle pull-right" @click="removeTask(task)"></span>
        <p>{{task.description}}</p>
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
            // setActiveList() {
            //     this.$store.dispatch('setActiveTask')
            // }
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