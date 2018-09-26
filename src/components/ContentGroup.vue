<style>
    .items-list{
        height: calc(100vh - 85px);
        overflow: auto;
    }
</style>

<template>
    <div class="card rounded-0">
        <div class="card-header">
            <h1>Content Blocks</h1>
            <div class="form-group">
                <label for="categories">Categories</label>
                <select class="form-control" id="categories" v-model="selectedCategory">
                    <option v-for="category in allCategories" :value="category.value"
                            :key="category.value">
                        {{ category.title }}</option>
                </select>
            </div>
        </div>
        <draggable v-model="filteredBlocks" class="dragArea"
                   :options="{group:{ name:'people',  pull:'clone', put:false }}">
            <div v-for="(element, index) in filteredBlocks" :key="index">
                <ContentBlockPreview :block="element" class="my-1"></ContentBlockPreview>
            </div>
        </draggable>
    </div>
</template>

<script>
import _ from 'lodash';
import draggable from 'vuedraggable';
import ContentBlockPreview from './ContentBlockPreview.vue';

export default {
  components: {
    ContentBlockPreview,
    draggable,
  },
  data() {
    return {
      selectedCategory: '',
    };
  },
  computed: {
    availableBlocks() {
      return this.$store.state.availableBlocks;
    },
    allCategories() {
      return this.$store.getters.availableCategories;
    },
    filteredBlocks() {
      if (this.selectedCategory === '' || this.selectedCategory === 'all') {
        this.$store.commit('setFilteredBlocks', this.availableBlocks);
        return this.availableBlocks;
      }
      this.$store.commit('setFilteredBlocks', _.filter(this.availableBlocks, { category: this.selectedCategory }));
      return _.filter(this.availableBlocks, { category: this.selectedCategory });
    },
  },

};
</script>
