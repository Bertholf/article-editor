<template>
    <div class="form-group">
        <label>{{control.label}}</label>
        <wysiwyg v-model="text" @change="valueChanged"></wysiwyg>
    </div>
</template>

<script>

export default {
  name: 'vue-wysiwyg',

  data() {
    return {
      text: this.value,
    };
  },

  props: {
    control: {},
    value: {},
  },
  methods: {
    valueChanged() {
      this.$emit('input', this.text);
    },
  },
};
</script>

<style scoped>

</style>
