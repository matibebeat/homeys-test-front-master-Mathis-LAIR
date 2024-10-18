<script setup>
import BaseNotification  from "@/components/BaseNotification.vue";
</script>

<template>
  <main>
    <BaseNotification type="Danger"/>
    <BaseNotification type="Success"/>
    <BaseNotification type="Warning"/>
    <BaseNotification type="Info"/>
  </main>
</template>

<style scoped>
</style>
