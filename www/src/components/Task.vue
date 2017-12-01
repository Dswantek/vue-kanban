<template>
    <div class="list-content">
        <router-link class="pull-left" :to="'/'">
            <button>Lists</button>
        </router-link>
        <div class="text-center">
            <h3>
                {{list.name}}
            </h3>
        </div>
        <!-- <tasks></tasks> -->
    </div>
</template>

<script>
    export default {
        name: 'list',
        components: {

        },
        mounted() {
            this.$store.dispatch('getList', this.$route.params.id)
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
    /* .board-content {} */
</style>