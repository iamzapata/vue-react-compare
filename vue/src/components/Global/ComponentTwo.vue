<script setup lang="ts">
import { store } from "./store";
import Button from "./Button.vue";
</script>

<template>
  <div className="card">
    <h3>Component Two: {{ store.count }}</h3>
    <Button />
  </div>
</template>
