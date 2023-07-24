import { createApp } from 'vue';
import router from './router/index';
import App from './App.vue';
import axios from 'axios';


// Set URL dasar backend
axios.defaults.baseURL = 'http://localhost:8080'; // 

const app = createApp(App);
app.use(router);
app.mount('#app');

