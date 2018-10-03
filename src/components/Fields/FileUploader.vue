<template>
    <div class="form-group">
        <label>{{control.label}}</label>
        <vue2-dropzone id="file-uploader" :options="dropzoneOptions" @vdropzone-success="fileUploaded"></vue2-dropzone>
    </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';

export default {
  name: 'FileUploader',
  components: {
    vue2Dropzone,
  },
  data() {
    return {
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        maxFiles: 1,
        thumbnailWidth: 200,
        addRemoveLinks: true,
        dictDefaultMessage: `<font-awesome-icon icon="coffee" /> Upload ${this.control.label}`,
      },
    };
  },
  props: {
    control: {},
    value: {},
  },
  methods: {
    fileUploaded(file, response) {
      this.$emit('input', response.files.file);
    },
  },
};
</script>

<style scoped>

</style>
