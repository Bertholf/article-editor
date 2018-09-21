import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    availableBlocks: [],
    loadedPage: {
      blocks: [],
    },
  },
  mutations: {
      getContentBlocks (state, contentBlocks) {
          state.availableBlocks = contentBlocks;
      }
  },
  actions: {
      getContentBlocks (context, contentBlocks) {
          context.commit('getContentBlocks', contentBlocks)
      }
  },
});
