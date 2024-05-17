<template>
  <div>
    {{data}}
    DEV MODE test
    <NuxtWelcome />
  </div>
</template>
<script setup lang="ts">
const {data} = useFetch('/api/test')
</script>
