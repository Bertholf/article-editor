<template>
    <div>
        <img :src="block.preview" alt="">
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    block: {},
  },
};
</script>
