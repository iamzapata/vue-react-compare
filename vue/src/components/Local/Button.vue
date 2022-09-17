<script setup lang="ts">
defineProps<{ incrementCount: () => void }>();
</script>

<template>
  <button @click="incrementCount">Increment count</button>
</template>
