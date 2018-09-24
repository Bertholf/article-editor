import Vue from 'vue';
import Vuex from 'vuex';
import lodash from 'lodash'
import http from './mixins/http'

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
            let categories =  lodash.map(
                lodash.uniqBy(state.availableBlocks, 'category'), function (block) {
                    return{
                        value: block.category,
                        title: block.category.toUpperCase()
                    }
                });

            return lodash.concat({value: "all", title: "All"}, categories);
        }
    },
  mutations: {
      getContentBlocks (state, contentBlocks) {
          state.availableBlocks = contentBlocks;
      }
  },
  actions: {
      getContentBlocks (context) {
          http.methods.get('content-blocks').then(
              data => {
                  context.commit('getContentBlocks', data)
              },
              error => {
                  console.log(error);
              }
          );
      },
  },
});
