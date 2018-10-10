/* eslint no-param-reassign: 0 */
import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
import api from './client';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    footerBlock: {},
    headerBlock: {},
    filteredBlocks: [],
    availableBlocks: [],
    loadedPage: {
      blocks: [],
    },
    exporting: false,
  },
  getters: {
    availableCategories: (state) => {
      const categories = _.map(_.uniqBy(state.availableBlocks, 'category'), block => ({
        value: block.category,
        title: _.capitalize(block.category),
      }));

      return _.concat({ value: 'all', title: 'All' }, categories);
    },
  },
  mutations: {
    setContentBlocks(state, contentBlocks) {
      state.availableBlocks = contentBlocks;
    },
    setHeaderBlock(state, headerBlock) {
      state.headerBlock = headerBlock;
    },
    setFooterBlock(state, footerBlock) {
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
    setBlockVariableValues(state, { index, variables }) {
      console.log(variables);
      _.each(variables, (value, key) => {
        console.log(index, state.loadedPage.blocks[index].variables);
        _.set(state.loadedPage.blocks[index], `variables.${key}.value`, value);
      });
    },
    setBlockVariableHtml(state, { index, html }) {
      _.set(state.loadedPage.blocks[index], 'html', html);
    },
    setExporting(state, exporting) {
      state.exporting = exporting;
    },
  },
  actions: {
    getContentBlocks(context) {
      api.methods.get('content-blocks').then(
        (data) => {
          context.commit('setContentBlocks', data);
        },
        (error) => {
          console.log(error);
        },
      );
    },
    getHTMLHeaderBlock(context) {
      api.methods.get('header-block').then(
        (data) => {
          context.commit('setHeaderBlock', data);
        },
        (error) => {
          console.log(error);
        },
      );
    },
    getHTMLFooterBlock(context) {
      api.methods.get('footer-block').then(
        (data) => {
          context.commit('setFooterBlock', data);
        },
        (error) => {
          console.log(error);
        },
      );
    },
  },
});
