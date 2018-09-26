<template>
    <div>
        <h1>Page</h1>
        <draggable v-model="loadedBlocks" class="dragArea" :options="{group:'people'}">
            <div @mouseover="mouseOver(element)" v-for="(element, index) in loadedBlocks" :key="index" v-html="element.html">
            </div>
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

    methods: {
        mouseOver: function (element) {
            console.log(element)
        }
    }
};
</script>
