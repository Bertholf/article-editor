import Vue from 'vue';
import Vuex from 'vuex';
import lodash from 'lodash'

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
      getContentBlocks (context, contentBlocks) {
          context.commit('getContentBlocks', contentBlocks)
      },
  },
});
