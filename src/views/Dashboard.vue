
<template>
    <div class="dashboard">
        <Navigation/>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
export default {
    name: 'home',
    components: {
        Navigation
    }
}
</script>

<style>
.dashboard {
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color: teal;
    height: 100vh;
    width: 100vw;
}
.content {
    background-color: white;
    border-radius: 10px;
    margin: 6px 6px 6px 0px;
}
</style>