<script setup lang="ts">
import ChildOne from "./ChildOne.vue";
import ChildTwo from "./ChildTwo.vue";
import GlobalComponent from "../Global/GlobalComponent.vue";
import { ref } from "vue";

const count = ref(0);

// update count
const updateCount = () => {
  count.value++;
};
</script>

<template>
  <div class="card">
    <h2>Parent ➡️ Child State: {{ count }}</h2>
    <button type="button" @click="updateCount">Increment count</button>

    <ChildOne :count="count" :updateCount="updateCount" />
    <ChildTwo :count="count" :updateCount="updateCount" />
    <GlobalComponent name="🔵" />
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
