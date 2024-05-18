<template>
  <div class="container">
  <section class="container-section">

    <img src="/nginx.jpeg" alt="">
    <span class="senior">Senior Nuxt UI developer</span>
    <span class="nginx">Docker container ports</span>
  </section>
  </div>
</template>
<script setup lang="ts">
</script>
<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.container-section{
  position: relative;
}
.senior {
  position: absolute;
  top: 5%;
  left:15%;
  font-size: 2rem;
  color: white;
  background-color: black;
  padding: 0.5rem;
}
.nginx {
  position: absolute;
  bottom: 15%;
  right:5%;
  font-size: 2rem;
  color: white;
  background-color: black;
  padding: 0.5rem;
}
</style>
