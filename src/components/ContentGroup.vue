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
        <draggable class="list-group list-group-flush items-list" :options="{clone: true, put:false, sort: false}">
            <div class="list-group-items p-1 border" v-for="block in filteredBlocks" :key="block.id">
                <content-block-preview :preview="block.preview"></content-block-preview>
            </div>
        </draggable>
    </div>
</template>

<script>
import lodash from 'lodash'
import draggable from "vuedraggable";
import ContentBlockPreview from './ContentBlockPreview.vue';

export default {
  components: {
      ContentBlockPreview,
      draggable
  },
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
            if (this.selectedCategory === '' || this.selectedCategory === 'all'){
                return this.availableBlocks;
            }
            return lodash.filter(this.availableBlocks, {category: this.selectedCategory});
        },
    }

};
</script>
