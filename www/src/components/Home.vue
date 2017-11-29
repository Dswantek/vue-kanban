<template>
    <div class="home text-center">
        <div class="container-fluid">
            <div class="row">
                <nav class="navbar navbar-default navbar-fixed-top">
                    <div class="navbar-header col-xs-12 col-md-1 text-center">
                        <!-- "BRAND" IMAGE -->
                        <a class="navbar-brand">
                            <img class="nav-img" alt="Brand" src="//placehold.it/50vh">
                        </a>
                    </div>
                    <!-- WEBSITE NAME -->
                    <div class="navbar-text col-xs-12 col-md-3" style="font-family: 'Rock Salt', cursive">
                        <h3>Track-It</h3>
                    </div>
                    <!-- FORMS -->

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
                </nav>
            </div>
            <!-- BEGIN MODAL -->
            <div id="signUpModal" class="modal fade" role="dialog">
                <div class="modal-dialog">

                    <!-- Modal SIGN UP WINDOW -->
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title text-center">Sign Up for a Free Account</h4>
                        </div>
                        <!-- EMAIL INPUT FORM -->
                        <div class="modal-body">
                            <label for="FirstName">First Name:</label>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="First Name ex. Johnny">
                            </div>
                            <label for="LastName">Last Name:</label>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Last Name ex. Bojangles">
                            </div>
                            <label for="Email">Email:</label>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="john.doe@gmail.com">
                            </div>
                            <!-- USERNAME INPUT FORM -->
                            <label for="Username">Username:</label>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Username">
                            </div>
                            <!-- PASSWORD INPUT FORM -->
                            <label for="Password">Password:</label>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Password">
                            </div>
                            <!-- SIGN UP BUTTON -->
                            <button type="button" class="btn btn-primary navbar-btn btn-center">Sign Up</button>
                        </div>
                        <!-- MODAL CLOSE -->
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>

            </div>
            <!-- End of Modal Sign Up Form -->
            <div class="content">
                <div class="row">
                    <div class="col-xs-12">
                        <!-- <error></error> -->
                        <board class="boards"> </board>
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
    export default {
        name: 'home',
        components: {
            Boards,
            Board,
            Error,
            Login
        },
        data() {
            return {

            }
        },
        methods: {

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