<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h2>Your Profile</h2>
        </div>
        <div class="panel-body">
            <h3>Name: {{user.name}}</h3>
            <h3>Email: {{user.email}}</h3>
            <h3>Username: {{user.username}}</h3>
            <h3>Profile picture: {{user.image}}</h3>
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