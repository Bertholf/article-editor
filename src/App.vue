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
import http from './mixins/http'

export default {
  name: 'app',
  components: {
    ContentGroup,
    Page,
  },

    mixins: [http],

  data() {
    return {
      showBlocks: false,
    };
  },

    created() {
      this.get('content-blocks').then(
          data => {
              this.$store.dispatch('getContentBlocks', data);
          },
          error => {
              console.log(error);
          }
      )
    },

  methods: {
    toggleBlocks() {
      this.showBlocks = !this.showBlocks;
    },
    exportHtml() {

    },
  },
};
</script>
