import { createApp } from "vue";
import "tw-elements";
import "./style.css";
import App from "./App.vue";
import router from "./views/router";

const app = createApp(App);
app.use(router);
app.mount("#app");
