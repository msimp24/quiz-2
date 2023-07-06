<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="is-primary"><RouterLink class="link" to="/">Home</RouterLink></nav>
  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(171, 100%, 41%);
  width: 100%;
  height: 5rem;
  gap: 2rem;
}
.link {
  text-decoration: none;
  color: white;
  font-size: 2rem;
}
.router-link-active {
  text-decoration: underline;
}
span {
  color: white;
}
</style>
