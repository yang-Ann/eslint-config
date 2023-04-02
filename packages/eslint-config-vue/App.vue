<template>
  <div>
    {{ msg }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const msg = ref("hello");
// @ts-ignore
var a = 1;

</script>

<style scoped>

</style>