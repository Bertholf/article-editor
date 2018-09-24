import Vue from 'vue';
import Vuex from 'vuex';
import lodash from 'lodash';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    footerBlock: {},
    headerBlock: {},
    filteredBlocks: [],
    availableBlocks: [],
    loadedPage: {
      blocks: [{
        id: 0,
        name: 'testElement',
        category: 'alerts',
        html: '<div>Span element</div>',
      }],
    },
  },

  getters: {
    availableCategories: (state) => {
      const categories = lodash.map(lodash.uniqBy(state.availableBlocks, 'category'), block => ({
        value: block.category,
        title: block.category.toUpperCase(),
      }));

      return lodash.concat({ value: 'all', title: 'All' }, categories);
    },
  },
  mutations: {
    getContentBlocks(state, contentBlocks) {
      state.availableBlocks = contentBlocks;
    },
    getHeaderBlock(state, headerBlock) {
      state.headerBlock = headerBlock;
    },
    getFooterBlock(state, footerBlock) {
      state.footerBlock = footerBlock;
    },
    setAvailableBlocks(state, blocks) {
      state.availableBlocks = blocks;
    },
    setLoadedBlocks(state, blocks) {
      state.loadedPage.blocks = blocks;
    },
    setFilteredBlocks(state, blocks) {
      state.filteredBlocks = blocks;
    },
  },
  actions: {
    getContentBlocks(context, contentBlocks) {
      context.commit('getContentBlocks', contentBlocks);
    },
  },
});
