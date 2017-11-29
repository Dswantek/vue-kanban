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
                    <login></login>
                </nav>
                </div>
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