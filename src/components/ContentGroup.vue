<style>
    .items-list{
        height: calc(100vh - 85px);
        overflow: auto;
    }
</style>

<template>
    <div class="card rounded-0">
        <div class="card-header"><h1>Content Blocks</h1></div>
        <div class="list-group list-group-flush items-list">
            <div class="list-group-items p-1 border" v-for="n in 10" :key="n">
                <content-block-preview></content-block-preview>
            </div>
        </div>
    </div>
</template>

<script>
import ContentBlockPreview from './ContentBlockPreview.vue';

export default {
  components: { ContentBlockPreview },
  data() {
    return {};
  },
};
</script>
