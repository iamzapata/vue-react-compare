<script setup lang="ts">
import { ref } from 'vue'
import ChildOne from './ChildOne.vue'
import ChildTwo from './ChildTwo.vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">Increment count</button>
  </div>

<ChildOne :count=count />
<ChildTwo :count=count />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
