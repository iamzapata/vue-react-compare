<script setup lang="ts">
import { store } from "./store";
import Button from "./Button.vue";

defineProps<{ name: string }>();
</script>

<template>
  <div className="card">
    <h3>{{ name }} Global Component: {{ store.count }}</h3>
    <Button />
  </div>
</template>
