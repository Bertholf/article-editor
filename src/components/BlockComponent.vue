<template>
    <vue-run-time-template :template="template"></vue-run-time-template>
</template>

<script>
    import VRuntimeTemplate from "v-runtime-template";
    export default {
        name: "BlockComponent",
        props: ['template', 'variables'],
        template: '<div>My name</div>',
        components: {
            'vue-run-time-template': VRuntimeTemplate
        }
    }
</script>

<style scoped>

</style>