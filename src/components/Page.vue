<template>
    <div>
        <draggable v-model="loadedBlocks" class="dragArea dropzone" :options="{group:'people', disabled: editing}">
            <block-viewer v-for="(block, index) in loadedBlocks" :key="index" :index="index" :block="block"
                   @editing="e =>{ $emit('editing', e); editing = e}"></block-viewer>
        </draggable>
    </div>
</template>

<script>
import draggable from 'vuedraggable';
import _ from 'lodash';
import blockViewer from './BlockViewer.vue';

export default {
  data() {
    return {
      editing: false,
    };
  },
  components: {
    draggable,
    blockViewer,
  },

  computed: {
    loadedBlocks: {
      get() {
        return this.$store.state.loadedPage.blocks;
      },
      set(blocks) {
        console.log(blocks);
        this.$store.commit('setLoadedBlocks', _.cloneDeep(blocks));
      },
    },
  },
};
</script>
