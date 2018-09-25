<template>
    <div id="app">
        <div class="navbar">

            <div class="d-inline-block mr-auto">
                <button class="btn btn-success" @click="toggleBlocks">
                    <fa-icon icon="bars"></fa-icon>
                </button>
            </div>
            <div class="d-inline-block ml-auto">
                <button class="btn btn-success" @click="exportHtml">Export</button>

            </div>
        </div>
        <div class="row no-gutters">
            <div class="vh-100 col-auto" v-if="showBlocks">
                <content-group></content-group>
            </div>
            <div class="vh-100 border bg-light col" @click="showBlocks = false">
                <page></page>
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
      showBlocks: false,
    };
  },

  created() {
    this.$store.dispatch('getContentBlocks');
    this.$store.dispatch('getHTMLHeaderBlock');
    this.$store.dispatch('getHTMLFooterBlock');
  },

  computed: {
    loadedPageBlocks() {
      return this.$store.state.loadedPage.blocks;
    },
  },

  methods: {
    toggleBlocks() {
      this.showBlocks = !this.showBlocks;
    },
    exportHtml() {
      let text = this.$store.state.headerBlock.html;

      this.loadedPageBlocks.forEach((block) => {
        if (block.id !== 0) {
          text += block.html;
        }
      });

      text += this.$store.state.footerBlock.html;


      const element = document.createElement('a');
      element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`);
      element.setAttribute('download', 'export.html');

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    },
  },
};
</script>
