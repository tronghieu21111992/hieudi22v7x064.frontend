
import { createApp } from "vue";
import App from "src/components/App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import router from './router';

createApp(App).use(router).mount('#app')

