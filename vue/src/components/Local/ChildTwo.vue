<script setup lang="ts">
import Button from "./Button.vue";

defineProps<{ count: number; incrementCount: () => void }>();
</script>

<template>
  <div className="card">
    <h3>Child Two: {{ count }}</h3>
    <Button :incrementCount="incrementCount" />
  </div>
</template>