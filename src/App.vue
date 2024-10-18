<script setup>
import BaseNotification  from "@/components/BaseNotification.vue";
import { ref } from "vue";

const notifications = ref([
  { type: "Success"},
  { type: "Success"},
  { type: "Danger"},
  { type: "Warning"},
  { type: "Info"}]);
</script>

<template>
  <main>
    <BaseNotification v-for="notification in notifications" :key="notification.type" :type="notification.type" @close="notifications.splice(notifications.indexOf(notification), 1)"/>
  </main>
</template>

<style scoped>
</style>
