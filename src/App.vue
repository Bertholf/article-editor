<template>
    <div id="app">
        <div class="navbar">

            <div class="d-inline-block mr-auto">
                <button class="btn btn-success" @click="toggleBlocks">
                    <fa-icon icon="bars"></fa-icon>
                </button>
            </div>
            <div class="d-inline-block ml-auto">
                <button class="btn btn-success" @click="exportHtml" :disabled="editing">Export</button>
            </div>
        </div>
        <div class="row no-gutters">
            <div class="vh-100 col-auto" v-if="showBlocks">
                <content-group></content-group>
            </div>
            <div class="vh-100 border bg-light col" @click="showBlocks = false">
                <page ref="page" @editing="e => editing = e"></page>
            </div>
        </div>
    </div>
</template>

<script>

import './styles/app.scss';
import ContentGroup from './components/ContentGroup.vue';
import Page from './components/Page.vue';

export default {
  name: 'app',
  components: {
    ContentGroup,
    Page,
  },

  data() {
    return {
      editing: false,
      showBlocks: true,
    };
  },

  created() {
    this.$store.dispatch('getContentBlocks');
    this.$store.dispatch('getHTMLHeaderBlock');
    this.$store.dispatch('getHTMLFooterBlock');
  },
  methods: {
    toggleBlocks() {
      this.showBlocks = !this.showBlocks;
    },
    exportHtml() {
      this.$store.commit('setExporting', true);
      this.$nextTick(() => {
        let text = this.$store.state.headerBlock.html || '';
        text += this.$refs.page.$el.outerHTML;
        text += this.$store.state.footerBlock.html || '';

        const element = document.createElement('a');
        element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`);
        element.setAttribute('download', 'export.html');

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);

        this.$store.commit('setExporting', false);
      });
    },
  },
};
</script>
