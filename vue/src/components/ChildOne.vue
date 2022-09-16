<script setup lang="ts">
defineProps<{ count: number; updateCount: () => void }>();
</script>

<template>
  <div className="card">
    Child One
    <div>{{ count }}</div>
    <button @click="updateCount">Increment count</button>
  </div>
</template>
