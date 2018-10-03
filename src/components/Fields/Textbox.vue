<template>
    <div class="form-group">
        <label>{{control.label}}</label>
        <input class="form-control" :type="control.type" :value="value" @input="$emit('input', $event.target.value)">
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    control: {},
    value: {},
  },
};
</script>
