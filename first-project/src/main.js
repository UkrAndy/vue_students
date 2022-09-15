import { createApp } from 'vue'
import App from './App.vue'
//1.Імпортуємо файл налаштувань роутера
import router from './router'

//2.Додаємо роутер дододатку
createApp(App).use(router).mount('#app')
