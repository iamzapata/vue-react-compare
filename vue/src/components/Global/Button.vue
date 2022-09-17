<script setup lang="ts">
import { store } from "./store";

const updateCount = () => {
  store.count++;
};
</script>

<template>
  <button type="button" @click="updateCount">
    Increment <strong>global</strong> count
  </button>
</template>

<style scoped></style>
