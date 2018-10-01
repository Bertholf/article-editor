<template>
    <div class="form-group">
        <label>{{control.label}}</label><br>
        <span :style="{backgroundColor: value}" class="px-5 py-2 d-inline-block my-1">&nbsp;</span>
        <br>
        <vue-color :value="value" @input="c => $emit('input', c.hex)"></vue-color>
    </div>
</template>

<script>
import VueColor from 'vue-color/src/components/Sketch.vue';

export default {
  components: { VueColor },
  props: {
    control: {},
    value: {},
  },
};
</script>
