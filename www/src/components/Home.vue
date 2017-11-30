<template>
    <div class="home text-center">
        <div class="container-fluid">
        
                <signup></signup>
                <!-- End of Modal Sign Up Form -->
                <div class="content">
                    <div class="row">
                        <div class="col-xs-12">
                            <!-- <error></error> -->
                            <board class="boards"></board>
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