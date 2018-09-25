import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash'
import http from './mixins/http'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      filteredBlocks: [],
    availableBlocks: [],
    loadedPage: {
      blocks: [{
          "id": 0,
          "name": "testElement",
          "category": "alerts",
          "html": "<div>Span element</div>"
      },],
    },
  },

    getters: {
        availableCategories: state => {
            return _.map(
                _.uniqBy(state.availableBlocks, 'category'), (block) => {
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
      },
      setAvailableBlocks ( state, blocks) {
          state.availableBlocks = blocks;
      },
      setLoadedBlocks (state, blocks) {
          state.loadedPage.blocks = blocks
      },
      setFilteredBlocks ( state, blocks) {
          state.filteredBlocks = blocks
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
