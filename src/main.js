import { createApp } from 'vue';
import { createPinia } from 'pinia';

import router from './router/index';

import App from './App.vue';

// 引用自定义样式
import './styles/index.scss';

createApp(App).use(createPinia()).use(router).mount('#app');
