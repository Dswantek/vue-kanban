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
                <span class="glyphicon glyphicon-pencil pull-right" @click="showProfile"></span>
                <form type="submit" @submit.prevent="submitProfile">
                    <!-- NAME -->
                    <h3>{{user.name}}</h3>
                    <div class="form-group">
                        <input name="name" type="text" class="form-control" placeholder="Name" v-model='profile.name'>
                    </div>
                    <!-- USERNAME -->
                    <h3>{{user.username}}</h3>                    
                    <div class="form-group">
                        <input name="username" type="text" class="form-control" placeholder="Username" v-model='profile.username'>
                    </div>
                    <!-- EMAIL INPUT FORM -->
                    <h3>{{user.email}}</h3>                    
                    <div class="form-group">
                        <input name="email" type="text" class="form-control" placeholder="Email" v-model='profile.email'>
                    </div>
                    <!-- PASSWORD INPUT FORM -->
                    <h3>{{user.password}}</h3>                    
                    <div class="form-group">
                        <input name="password" type="password" class="form-control" placeholder="Password" v-model='profile.password'>
                    </div>
                    <!-- IMAGE -->
                    <h3>{{user.image}}</h3>                    
                    <div class="form-group">
                        <input name="image" type="text" class="form-control" placeholder="Image" v-model='profile.image'>
                    </div>
                    <!-- LOGIN BUTTON -->
                    <div class="form-group">
                        <button type="submit" class="btn btn-default">Submit Changes</button>
                    </div>
                </form>
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
            showProfile(){
                this.$store.state.commit('setProfile')
            }
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