import './styles/main.scss';

import { createApp } from 'vue';
import App from './App.vue';

// 사용하려는 FontAwesome 아이콘들 import
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// 사용하려는 FontAwesome 아이콘들 import
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

// FontAwesome 라이브러리에 아이콘 추가
library.add(fas, fab, far);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
