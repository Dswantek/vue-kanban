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
                        <label for="firstName"><span class="glyphicon glyphicon-edit"></span> Full Name:</label>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="ex. Johnny Appleseed" required v-model="register.name">
                        </div>
                        <label for="Email"><span class="glyphicon glyphicon-envelope"></span> Email:</label>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="john.doe@gmail.com" required v-model="register.email">
                        </div>
                        <!-- USERNAME INPUT FORM -->
                        <label for="Username"><span class="glyphicon glyphicon-user"></span> Username:</label>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="trackmaster123" required v-model="register.username">
                        </div>
                        <label for="Username"><span class="glyphicon glyphicon-picture"></span> Profile Image:</label>
                        <!-- IMG INPUT FORM -->
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="image url here" v-model="register.image">
                        </div>
                        <!-- PASSWORD INPUT FORM -->
                        <label for="Password"><span class="glyphicon glyphicon-eye-open"></span> Password:</label>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Password" required v-model="register.password">
                        </div>
                        <!-- SIGN UP BUTTON -->
                        <div class="form-group">
                            <button type="submit" class="btn btn-success navbar-btn btn-center"><span class="glyphicon glyphicon-lock"></span> Sign Up</button>
                        </div>
                    </form>
                </div>
                <!-- MODAL CLOSE -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span> Close</button>
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
                    image: '',
                    password: ''
                }
            }
        },
        methods: {
            submitRegister() {
                this.$store.dispatch('register', this.register)
                this.register = {
                    name: '',
                    email: '',
                    username: '',
                    image: '',
                    password: ''
                }
            },

        }
    }
</script>

<style>
</style>