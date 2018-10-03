<template>
    <div class="mx-4">
        <div class="card">
            <form @submit.prevent="submit" class="card-body">
                <codemirror v-model="code" :options="cmOptions"></codemirror>
                <div class="text-right">
                    <button class="btn btn-success mr-2" type="submit">Save</button>
                    <button class="btn btn-outline-secondary btn-sm" type="button" @click="cancel">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { codemirror } from 'vue-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/lucario.css';

const beautify = require('js-beautify').html;
const HTMLHint = require('htmlhint').HTMLHint;

export default {
  data() {
    return {
      code: {},
      cmOptions: {
        theme: 'lucario',
        mode: 'text/html',
        smartIndent: true,
        lineNumbers: true,
      },
      beautifyOptions: {
        indent_size: 2,
      },
    };
  },
  components: {
    codemirror,
  },
  methods: {
    submit() {
      const messages = HTMLHint.verify(this.code, { 'tag-pair': true });
      if (messages.length < 1) {
        this.$emit('save', this.code);
      } else {
        let errorMessages = '';

        for (let i = 0; i < messages.length; i++) {
          errorMessages += `${messages[i].message}<br>`;
        }

        this.$toastr.e(errorMessages);
      }
    },
    cancel() {
      this.$emit('close');
    },
  },
  props: {
    value: {},
  },
  watch: {
    value: {
      immediate: true,
      handler(code) {
        this.code = beautify(code, this.beautifier);
      },
    },
  },
};
</script>

