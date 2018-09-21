import Vue from 'vue';
import Vuex from 'vuex';
import lodash from 'lodash'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    availableBlocks: [],
    loadedPage: {
      blocks: [],
    },
  },

    getters: {
        availableCategories: state => {
            return lodash.map(
                lodash.uniqBy(state.availableBlocks, 'category'), function (block) {
                    return{
                        value: block.category,
                        title: block.category.toUpperCase()
                    }
                });
        }
    },
  mutations: {
      getContentBlocks (state, contentBlocks) {
          state.availableBlocks = contentBlocks;
      }
  },
  actions: {
      getContentBlocks (context, contentBlocks) {
          context.commit('getContentBlocks', contentBlocks)
      },
  },
});
