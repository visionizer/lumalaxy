<template>
<div id="app">
    <navigation></navigation>
    <Popup msg="Hello World"></Popup>
    <uploader></uploader>
</div>
</template>

<script lang="ts">
import {
    Options,
    Vue
} from "vue-class-component";
import Uploader from "./components/Uploader.vue";
import Navigation from "./components/Navigation.vue";
import Popup from "./components/Popup.vue";
@Options({
    components: {
        Uploader,
        Navigation,
        Popup,
    },
})
export default class App extends Vue {}
</script>

<style lang=scss>
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;

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
