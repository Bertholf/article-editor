<template>
    <div>
        <h1>Page</h1>
        <draggable v-model="loadedBlocks" class="dragArea" :options="{group:'people'}" @add="added">
            <block-component v-for="(element, index) in loadedBlocks" :key="index" :template="element.html" :variables="element.variables"></block-component>

            <!--<div @mouseover="mouseOver(element)"  v-html="element.html">-->
            <!--</div>-->
        </draggable>
    </div>
</template>

<script>
import draggable from 'vuedraggable';
import blockComponent from './BlockComponent'

export default {
  data() {
    return {

    };
  },
  components: {
    draggable,
      'block-component': blockComponent
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
            //console.log(element)
        },
        added: function () {
            console.log("Added")
        }
    }
};
</script>
