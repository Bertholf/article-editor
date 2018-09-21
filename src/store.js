import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    availableBlocks: {
      jumbotron: {},
    },
    loadedPage: {
      blocks: [],
    },
  },
  mutations: {},
  actions: {},
});
