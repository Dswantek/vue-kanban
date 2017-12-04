<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h2>Your Profile</h2>
        </div>
        <div class="panel-body">
            <div v-if="showProfile">
                <span class="glyphicon glyphicon-pencil pull-right" @click="showProfile"></span>
                <h3>Name: {{user.name}}</h3>
                <h3>Email: {{user.email}}</h3>
                <h3>Username: {{user.username}}</h3>
                <h3>Profile picture: {{user.image}}</h3>
            </div>
            <div v-else>
                
            </div>
        </div>

    </div>
</template>

<script>
      export default {
        name: "profile",
        data() {
            return {}
            },
        methods: {
            showProfile(){

            }
        },
        computed: {
            user() {
                return this.$store.state.user
            }
        }
    }  
</script>

<style>

</style>