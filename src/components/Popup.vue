<template>
<div class="Popup">
    <button class="button" @click="showPopup = true">Show Modal</button>
    <transition name="fade" appear>
        <div class="popupOverlay" v-if="showPopup" @click="showPopup = false"></div>
    </transition>
    <transition name="slide">
        <div class="thePopup" v-if="showPopup">
            <h1>{{ title }}</h1>
            <p>{{ msg }}</p>
            <button class="button" @click="showPopup = false">Close</button>
        </div>
    </transition>
</div>
</template>

<script lang="ts">
export default {
    name: "Popup",
    data() {
        return {
            title: "Lorem Ipsum",
            msg: "Enim incididunt sit nisi excepteur sit deserunt ea cillum magna fugiat deserunt laboris deserunt. Mollit sint aute fugiat minim laborum. Sint do ipsum ex eiusmod do consequat.",
            showPopup: false
        }
    }
}
</script>

<style lang=scss scoped>
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

.popupOverlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 98;
    background-color: rgba(0, 0, 0, 0.3);
}

.thePopup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;

    width: 100%;
    max-width: 400px;
    background-color: #FFF;
    border-radius: 16px;

    padding: 25px;

    h1 {
        color: #222;
        font-size: 32px;
        font-weight: 900;
        margin-bottom: 15px;
    }

    p {
        color: #666;
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 15px;
    }
}


.Popup {
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;

}

.fade-enter-active,
.fade-leave-active {
 transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
 opacity: 0;
}


.slide-enter-active,
.slide-leave-active {
 transition: transform .5s;
}

.slide-enter,
.slide-leave-to {
 transform: translateY(-50%) translateX(100vw);
}

</style>
