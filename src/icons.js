import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faPen, faCode, faUndo} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faBars);
library.add(faPen);
library.add(faCode);
library.add(faUndo);

Vue.component('fa-icon', FontAwesomeIcon);
