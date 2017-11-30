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
    // import Tasks from './Tasks'
    export default {
        name: 'list',
        components: {
            // Tasks
        },
        mounted() {
            this.$store.dispatch('getList', this.$route.params.id)
        },
        methods: {
            setActiveList() {
                this.$store.dispatch('setActiveList')
            }
        },
        computed: {
            list() {
                return this.$store.state.activeList
            }
        }
    }
</script>

<style scoped>
    /* .board-content {} */
</style>