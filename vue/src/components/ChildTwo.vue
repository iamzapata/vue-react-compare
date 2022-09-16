<script setup lang="ts">

defineProps<{ count: number }>()

</script>

<template>
 <div className="card">Child Two
    <div>Count is: {{count}}</div>
  </div>
 
</template>

