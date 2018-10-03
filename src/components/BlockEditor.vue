<template>
    <div class="mx-4">
        <div class="card">
            <div class="card-header">
                <ul class="nav nav-tabs nav-justified card-header-tabs">
                    <li class="nav-item">
                        <a class="nav-link" :active="{active: selectedCategory === 'content'}"
                           @click="selectedCategory='content'">Content</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" :active="{active: selectedCategory === 'styles'}"
                           @click="selectedCategory='styles'">Styles</a>
                    </li>
                </ul>
            </div>
            <form @submit.prevent="submit" class="card-body">
                <component v-for="(opt, slug) in visibleOptions" :is="opt.control" :control="opt" :key="slug"
                           :name="slug" v-model="values[slug]">{{slug}}</component>
                <div class="text-right">
                    <button class="btn btn-success mr-2" type="submit">Save</button>
                    <button class="btn btn-outline-secondary btn-sm" type="button" @click="cancel">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
import Textbox from './Fields/Textbox.vue';
import ColorPicker from './Fields/ColorPicker.vue';
import FileUploader from './Fields/FileUploader.vue';

export default {
  components: { Textbox, ColorPicker, FileUploader },
  computed: {
    visibleOptions() {
      return _.pickBy(this.options, { category: this.selectedCategory });
    },
  },
  data() {
    return {
      values: {},
      selectedCategory: 'content',
    };
  },
  methods: {
    submit() {
      console.log(this.values);
      this.$emit('save', this.values);
    },
    cancel() {
      this.$emit('close');
    },
  },
  props: {
    options: {},
    variables: {},
  },
  watch: {
    variables: {
      deep: true,
      immediate: true,
      handler(newValue) {
        this.values = _.cloneDeep(newValue);
      },
    },
  },
};
</script>
