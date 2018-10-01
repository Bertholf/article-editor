<template>
    <div class="card card-body">
        <form @submit.prevent="submit">
            <component v-for="(opt, slug) in options" :is="opt.control" :control="opt" :key="slug"
                       v-model="values[slug]"></component>
            <div class="text-right">
                <button class="btn btn-success mr-2" type="submit">Save</button>
                <button class="btn btn-outline-secondary btn-sm" type="button" @click="cancel">Cancel</button>
            </div>
        </form>
    </div>
</template>

<script>

  import Textbox from './Fields/Textbox';

  export default {
    components: {Textbox},
    data(){
      return {values: {}}
    },
    methods: {
      submit(){
        console.log(this.values);
        this.$emit('save', this.values)
      },
      cancel(){
        this.$emit('close')
      },
    },
    props: {
      options: {},
      variables: {}
    },
    watch: {
      variables: {
        deep: true,
        immediate: true,
        handler(newValue){
          console.log(newValue);
          this.values = _.cloneDeep(newValue);
        },
      }
    },
  }
</script>