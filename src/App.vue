<template>
  <div id="app">
    <div class="row no-gutters">
      <div class="vh-100 col-auto">
        <content-group></content-group>
      </div>
      <div class="vh-100 border bg-dark col">
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
};
</script>
