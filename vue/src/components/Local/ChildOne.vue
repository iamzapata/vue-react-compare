<script setup lang="ts">
defineProps<{ count: number; updateCount: () => void }>();
</script>

<template>
  <div className="card">
    <h3>Child One: {{ count }}</h3>
    <button @click="updateCount">Increment count</button>
  </div>
</template>
