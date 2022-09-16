<script setup lang="ts">
import { store } from "./store";

import ComponentOne from "./ComponentOne.vue";
import ComponentTwo from "./ComponentTwo.vue";
import GlobalComponent from "./GlobalComponent.vue";

const updateCount = () => {
  store.count++;
};
</script>

<template>
  <div class="card">
    <h2>Global 🌐 State</h2>
    <button type="button" @click="updateCount">
      Increment <strong>global</strong> count: {{ store.count }}
    </button>

    <ComponentOne />
    <ComponentTwo />
    <GlobalComponent name="🟡" />
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
