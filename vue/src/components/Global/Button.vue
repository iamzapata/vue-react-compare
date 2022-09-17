<script setup lang="ts">
import { store } from "./store";

const incrementCount = () => {
  store.count++;
};
</script>

<template>
  <button type="button" @click="incrementCount">
    Increment <strong>global</strong> count
  </button>
</template>

<style scoped></style>