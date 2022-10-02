<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Left from '../components/Left.vue';
import Right from '../components/Left.vue';
</script>

<template>
  <div class="main-container">
    <SceneViewer />
    <Left />
    <Right />
  </div>
</template>

<style lang="scss" scoped>
.main-container {
  height: 100%;
  overflow: hidden;
  position: relative;
}
</style>
