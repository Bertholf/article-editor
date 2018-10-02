<template>
    <div>
        <a class="float-right mr-2 mt-2" @click="toggleEdit" v-if="!edit">
            <fa-icon icon="pen"></fa-icon>
        </a>
        <compiler :template="block.html" v-if="!edit"></compiler>
        <block-editor :options="block.variables" :variables="variables" v-if="edit"
                      @save="updateVariables" @close="toggleEdit"></block-editor>
    </div>
</template>

<script>
  import Compiler from 'v-runtime-template';
  import BlockEditor from './BlockEditor';

  export default {
    components: {
      BlockEditor,
      Compiler
    },
    data(){
      return {
        edit: false,
        variables: {}
      }
    },
    mounted(){
      this.$store.watch(state => state.loadedPage.blocks[this.index].variables, variables =>{
        this.variables = _.mapValues(variables, (variable) =>{
          return variable.value || variable.default;
        });
      });
      this.variables = _.mapValues(this.block.variables, (variable) =>{
        return variable.value || variable.default;
      });
    },
    methods: {
      toggleEdit(){
        this.edit = !this.edit;
        this.$emit('editing', this.edit);
      },
      updateVariables(variables){
        this.variables = variables;
        this.$store.commit('setBlockVariableValues', {index: this.index, variables});
        this.toggleEdit();
      }
    },
    props: {
      block: {
        required: true,
      },
      index: {
        required: true
      }
    },
  };
</script>
