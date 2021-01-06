<template>
    <div id="app">
        <navigation 


        />
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
    import {
        Options,
        Vue,
    } from "vue-class-component";

    import Navigation from "./components/Navigation.vue";

    @Options({
        components: {
            Navigation,
        },
    })
    export default class App extends Vue {}
</script>

<style lang=scss>
    @import 'https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css';

    figure {
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 10px;
        margin-inline-end: 0;
    }

    body {
        margin: 0;
    }

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        position: relative;
        text-align: center;
        color: #2c3e50;
        display: flex;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Montserrat", sans-serif;
    }

    .button {
        appearance: none;
        outline: none;
        border: none;
        background: none;
        cursor: pointer;

        display: inline-block;
        padding: 15px 25px;
        background-image: linear-gradient(to right, #CC2E5D, #FF5858);
        border-radius: 8px;

        color: #FFF;
        font-size: 18px;
        font-weight: 700;

        box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
        transition: 0.4s ease-out;

        &:hover {
            box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
        }
    }
</style>