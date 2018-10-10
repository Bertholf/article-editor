<template>
    <div>
        <div class="float-right" v-if="!exporting">
            <a class="mr-2 mt-2" @click="toggleEdit" v-if="!edit && !block.html">
                <fa-icon icon="pen"></fa-icon>
            </a>
            <a class="mr-2 mt-2" @click="toggleHtml" v-if="!edit && !html">
                <fa-icon icon="code"></fa-icon>
            </a>
            <a class="mr-2 mt-2" @click="resetHtml" v-if="!html && block.html">
                <fa-icon icon="undo"></fa-icon>
            </a>
        </div>
        <compiler ref="viewer" :template="block.html || block.template" v-if="!edit && !html"></compiler>
        <block-editor :options="block.variables" :variables="variables" v-if="edit" @save="updateVariables"
                      @close="toggleEdit"></block-editor>
        <block-html-editor v-model="htmlCode" v-if="html" @save="updateHtml" @close="toggleHtml"></block-html-editor>
    </div>
</template>

<script>
import _ from 'lodash';
import Compiler from 'v-runtime-template';
import { mapState } from 'vuex';
import BlockEditor from './BlockEditor.vue';
import BlockHtmlEditor from './BlockHtmlEditor.vue';

export default {
  components: {
    BlockEditor,
    BlockHtmlEditor,
    Compiler,
  },
  computed: {
    ...mapState({
      exporting: state => state.exporting,
    }),
  },
  data() {
    return {
      edit: false,
      html: false,
      htmlCode: '',
      variables: {},
    };
  },
  mounted() {
    this.$store.watch(state => state.loadedPage.blocks[this.index].variables, (variables) => {
      this.variables = _.mapValues(variables, variable => variable.value || variable.default);
    });
    this.variables = _.mapValues(this.block.variables, variable => variable.value || variable.default);
  },
  methods: {
    toggleEdit() {
      this.edit = !this.edit;
      this.$emit('editing', this.edit);
    },
    toggleHtml() {
      this.html = !this.html;
      this.$emit('editing', this.html);
      if (this.html) {
        this.htmlCode = this.$refs.viewer.$el.outerHTML;
      }
    },
    updateVariables(variables) {
      this.variables = variables;
      this.$store.commit('setBlockVariableValues', { index: this.index, variables });
      this.toggleEdit();
    },
    updateHtml(html) {
      this.$store.commit('setBlockVariableHtml', { index: this.index, html });
      this.toggleHtml();
    },
    resetHtml() {
      this.$store.commit('setBlockVariableHtml', { index: this.index, html: undefined });
      this.$forceUpdate();
    },
  },
  props: {
    block: {
      required: true,
    },
    index: {
      required: true,
    },
  },
};
</script>
