<template>
    <div>
        <draggable v-model="loadedBlocks" class="dropzone" :options="{group:'people'}">
            <div v-for="(element, index) in loadedBlocks" :key="index" v-html="element.html"></div>
        </draggable>
    </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  data() {
    return {

    };
  },
  components: {
    draggable,
  },

  computed: {
    loadedBlocks: {
      get() {
        return this.$store.state.loadedPage.blocks;
      },
      set(newValue) {
        this.$store.commit('setLoadedBlocks', newValue);
      },
    },
  },
};
</script>
