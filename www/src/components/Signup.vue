<template>
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
                    <label for="firstName">First Name:</label>
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
</template>

<script>
    export default {
        data() {
            return {
                registerData: {
                    name: '',
                    email: '',
                    password: '',
                }
            }
        }
    }
</script>

<style>
</style>