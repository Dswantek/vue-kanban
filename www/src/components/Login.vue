<template>
    <div class="login">
        <h5 class="text-danger" v-if="error">{{error}}</h5>
        <!-- Trigger the sign-up modal with a button -->
        <button type="button" class="btn btn-info btn-md navbar-right col-xs-12-offset-1 col-md-1" style="margin-top: 1.5rem" data-toggle="modal"
            data-target="#signUpModal">Sign Up</button>

        <div class="navbar-form navbar-right col-xs-12 col-md-7">
            <!-- This is where we will send the login info to the server -->
            <form type="submit" @submit="login">
                <!-- USERNAME INPUT FORM -->
                <div class="form-group">
                    <input name="email" type="text" class="form-control" placeholder="Email">
                </div>
                <!-- PASSWORD INPUT FORM -->
                <div class="form-group">
                    <input name="password" type="password" class="form-control" placeholder="Password">
                </div>
                <!-- LOGIN BUTTON -->
                <div class="form-group">
                    <button type="submit" class="btn btn-default navbar-btn">Login</button>
                </div>
            </form>
        </div>
    </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                login: {
                    email: '',
                    password: ''
                },
            }
        },
        methods: {
            toggleLoginForm(){
                this.loginForm = !this.loginForm
            },
            submitLogin(){
                this.$store.dispatch('login', this.login)
                this.login = {
                    email: '',
                    password: ''
                }
            }
        },
        computed: {
            error(){
                return this.$store.state.error.message
            }
        }
    }
</script>

<style>
</style>