<script setup lang="ts">
import { store } from "./store";

import ComponentOne from "./ComponentOne.vue";
import ComponentTwo from "./ComponentTwo.vue";
import GlobalComponent from "./GlobalComponent.vue";
import Button from "./Button.vue";
</script>

<template>
  <div class="card">
    <h2>Global 🌐 State: {{ store.count }}</h2>

    <Button />
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
