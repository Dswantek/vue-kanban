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
                    <form type="submit" @submit.prevent="submitRegister">
                        <label for="firstName">Full Name:</label>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="ex. Johnny Appleseed" required v-model="register.name">
                        </div>
                        <label for="Email">Email:</label>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="john.doe@gmail.com" required v-model="register.email">
                        </div>
                        <!-- USERNAME INPUT FORM -->
                        <label for="Username">Username:</label>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="trackmaster123" required v-model="register.username">
                        </div>
                        <!-- PASSWORD INPUT FORM -->
                        <label for="Password">Password:</label>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Password" required v-model="register.password">
                        </div>
                        <!-- SIGN UP BUTTON -->
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary navbar-btn btn-center">Sign Up</button>
                        </div>
                    </form>
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
                register: {
                    name: '',
                    email: '',
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            submitRegister() {
                debugger
                this.$store.dispatch('register', this.register)
                this.register = {
                    name: '',
                    email: '',
                    username: '',
                    password: ''
                }
            },

        }
    }
</script>

<style>
</style>