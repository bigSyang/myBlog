<template>
  <div class="global-component">
    {{ name }}
  </div>
</template>

<script setup lang="ts">
  const props = defineProps(['name'])
  console.log(props.name)
</script>

<style scoped>
.global-component{
    //border: 1px solid #ccc;
    padding: 10px 20px;
    cursor: pointer;
    color: blue;
}
</style>
