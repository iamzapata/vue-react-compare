<script setup lang="ts">
import { store } from "./store";

const updateCount = () => {
  store.count++;
};
</script>

<template>
  <div className="card">
    Component One
    <div>{{ store.count }}</div>
    <button @click="updateCount">
      Increment <strong>global</strong> count
    </button>
  </div>
</template>
