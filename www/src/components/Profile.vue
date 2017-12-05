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
    </div>
</template>

<script>
      export default {
        name: "profile",
        data() {
            return {
                profile: {
                    name: '',
                    email: '',
                    username: '',
                    image: '',
                }
            }
            },
        methods: {
            // setProfile(data){
            //     this.$store.dispatch('setProfile', data)
            // },
            // submitProfile(){
            //     this.$store.dispatch('updateProfile', {user: this.user._id, profile: this.profile})
            //     this.profile = {
            //         name: '',
            //         email: '',
            //         username: '',
            //         image: '',
            //     }
            // }
        },
        computed: {
            user() {
                return this.$store.state.user
            },
            showProfile() {
                return this.$store.state.showProfile
            }
        }
    }  
</script>

<style>

</style>