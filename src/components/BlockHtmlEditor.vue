<template>
    <div class="mx-4">
        <div class="card">
            <div class="card-body">
                <div class="alert alert-danger" v-if="errors.length">
                    <ul>
                        <li v-for="(error, index) in errors" :key="index">{{error.message}}</li>
                    </ul>
                </div>
                <codemirror v-model="code" :options="cmOptions"></codemirror>
                <div class="text-right">
                    <button class="btn btn-success" type="button" :disabled="!!errors.length"
                            :class="{disabled: errors.length}" @click="submit">
                        Save
                    </button>
                    <button class="ml-2 btn btn-outline-secondary btn-sm" type="button" @click="cancel">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';

import { codemirror } from 'vue-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/lucario.css';
import 'codemirror/addon/lint/lint';
import 'codemirror/addon/lint/lint.css';
import 'codemirror/addon/lint/html-lint';
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/foldgutter';

import { HTMLHint } from 'htmlhint';

const beautify = require('js-beautify').html;

export default {
  data() {
    return {
      code: {},
      cmOptions: {
        theme: 'lucario',
        mode: 'text/html',
        smartIndent: true,
        lineNumbers: true,
        lint: true,
        tabMode: 'indent',
        styleActiveLine: true,
        lineWrapping: true,
        autoCloseTags: true,
        foldGutter: true,
        dragDrop: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
      },
      beautifyOptions: {
        indent_size: 2,
      },
      errors: [],
      lastUpdate: undefined,
    };
  },
  components: {
    codemirror,
  },
  methods: {
    submit() {
      this.validate();
      if (!this.errors.length) {
        this.$emit('save', this.code);
      }
    },
    cancel() {
      this.$emit('close');
    },
    validate() {
      console.log('here');
      this.errors = HTMLHint.verify(this.code, {
        'tagname-lowercase': true,
        'attr-lowercase': true,
        'attr-value-double-quotes': true,
        'doctype-first': false,
        'tag-pair': true,
        'spec-char-escape': true,
        'id-unique': true,
        'src-not-empty': true,
        'attr-no-duplication': true,
      });
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
    code() {
      this.lastUpdate = Date.now();
      // wait for a second before validating
      _.debounce(() => {
        // skip if updated less than a second
        if (Date.now() - this.lastUpdate > 1000) {
          this.validate();
        }
      }, 1200)();
    },
  },
};
</script>

