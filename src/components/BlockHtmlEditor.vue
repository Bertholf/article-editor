<template>
    <div class="mx-4">
        <div class="card">
            <form @submit.prevent="submit" class="card-body">
                <textarea class="form-control" rows="10" v-model="code"></textarea>
                <div class="text-right">
                    <button class="btn btn-success mr-2" type="submit">Save</button>
                    <button class="btn btn-outline-secondary btn-sm" type="button" @click="cancel">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
      code: {},
    };
  },
  methods: {
    submit() {
      this.$emit('save', this.code);
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
        this.code = code;
      },
    },
  },
};
</script>
