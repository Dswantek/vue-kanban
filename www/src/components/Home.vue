<template>
    <div class="home text-center">
        <div class="container-fluid">
            <div class="row">
                <nav class="navbar navbar-default navbar-fixed-top">
                    <!-- <div class="navbar-header col-xs-12 col-md-1 text-center">
                        (Brand Image)
                        <a class="navbar-brand">
                            <img class="nav-img" alt="Brand" src="user.image">
                        </a>
                    </div> -->
                    <!-- WEBSITE NAME -->
                    <div class="navbar-text col-xs-12 col-md-4" style="font-family: 'Rock Salt', cursive">
                        <h3>Track-It</h3>
                    </div>
                    <!-- FORMS -->
                    <login></login>
                </nav>

                </div>
                <signup></signup>
                <!-- End of Modal Sign Up Form -->
                <div class="content">
                    <div class="row">
                        <div class="col-xs-12">
                            <!-- <error></error> -->
                            <boards class="boards"></boards>
                        </div>
                    </div>


                </div>
                <!-- End Content Section -->
            </div>
            <!-- End of Container -->
        </div>

</template>

<script>
    import Boards from './Boards'
    import Board from './Board'
    import Error from './Error'
    import Login from './Login'
    import Signup from './Signup'
    export default {
        name: 'home',
        components: {
            Boards,
            Board,
            Error,
            Login,
            Signup
        },
        data() {
            return {
                loginData: {
                    email: '',
                    password: ''
                },
                registerData: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',

                }
            }
        },
        methods: {
            login(){
                //Add check to make sure password matches and username is available??
                this.$store.dispatch('login', this.login)
            },
            register(){
                this.$store.dispatch('register', this.register)
            }
        },

        computed: {

        }

    }


</script>

<style>
    .content {
        margin-top: 5%;
    }
</style>