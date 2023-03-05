import { createApp } from 'vue'
import App from './App.vue'
// импорт новых js файлов
import store from './vuex/store'
import router from './router/router'
// рендерим наш компонент сюда
const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app')
