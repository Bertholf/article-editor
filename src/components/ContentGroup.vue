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
                    <option v-for="category in allCategories" :value="category.value" :key="category.value">{{ category.title }}</option>
                </select>
            </div>
        </div>
        <div class="list-group list-group-flush items-list">
            <div class="list-group-items p-1 border" v-for="block in filteredBlocks" :key="block.id">
                <content-block-preview :block="block"></content-block-preview>
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash'
import ContentBlockPreview from './ContentBlockPreview.vue';

export default {
  components: { ContentBlockPreview },
  data() {
    return {
        selectedCategory: ''
    };
  },
    computed: {
        availableBlocks () {
            return this.$store.state.availableBlocks
        },
        allCategories () {
            return this.$store.getters.availableCategories
        },
        filteredBlocks () {
            if (this.selectedCategory === ''){
                return this.availableBlocks;
            }
            return _.filter(this.availableBlocks, {category: this.selectedCategory});
        },
    }

};
</script>
