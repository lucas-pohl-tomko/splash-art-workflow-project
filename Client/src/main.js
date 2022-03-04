import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'boxicons'
import 'material-icons/iconfont/material-icons.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

createApp(App).use(store).use(router).mount("#app");
