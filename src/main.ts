import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router"
import firebase from "firebase";





createApp(App)
  .use(router)
  .mount("#app") // The last thing (!)

