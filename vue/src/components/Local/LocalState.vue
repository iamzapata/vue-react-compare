<script setup lang="ts">
import ChildOne from "./ChildOne.vue";
import ChildTwo from "./ChildTwo.vue";
import GlobalComponent from "../Global/GlobalComponent.vue";
import Button from "./Button.vue";

import { ref } from "vue";

const count = ref(0);

const incrementCount = () => {
  count.value++;
};
</script>

<template>
  <div class="card">
    <h2>Parent ➡️ Child State: {{ count }}</h2>
    <Button :incrementCount="incrementCount" />

    <ChildOne :count="count" :incrementCount="incrementCount" />
    <ChildTwo :count="count" :incrementCount="incrementCount" />
    <GlobalComponent name="🔵" />
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>