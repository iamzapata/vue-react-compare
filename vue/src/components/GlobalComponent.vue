<script setup lang="ts">
import { store } from "./store";

defineProps<{ name: string }>();

const updateCount = () => {
  store.count++;
};
</script>

<template>
  <div className="card">
    GlobalComponent: {{ name }}
    <div>{{ store.count }}</div>
    <button @click="updateCount">
      Increment <strong>global</strong> count
    </button>
  </div>
</template>
