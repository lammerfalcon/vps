<template>
  <div>
    {{data}}
    DEV MODE
    <NuxtWelcome />
  </div>
</template>
<script setup lang="ts">
const {data} = useFetch('/api/test')
</script>
