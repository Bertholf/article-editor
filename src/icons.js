import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faEdit, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faBars);
library.add(faEdit);
library.add(faPen);

Vue.component('fa-icon', FontAwesomeIcon);
