<template>
    <div>
        <h1>Page</h1>
        <draggable class="list-group list-group-flush items-list" :drop="blockAdded" v-model="blocks" :options="{clone: true, put:false, sort: true, onClone: clone}">
            <div class="list-group-items p-1 border" v-for="block in blocks" :key="block.id">
                <h1>Some element</h1>
            </div>
        </draggable>
    </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  data() {
    return {
        blocks: [1, 2, 3]
    };
  },
    components: {
        draggable
    },
    methods: {
      blockAdded: function (e) {
          console.log("element added");
      },
        clone: function () {
            console.log("element added");
        }
    }
};
</script>
