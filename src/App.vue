<script setup>
import BaseNotification  from "@/components/BaseNotification.vue";
import { ref } from "vue";

var notifications = ref([
  { type: "Success"},
  { type: "Danger"},
  { type: "Warning"},
  { type: "Info"}]);

function addNotification(type) {
  if (notifications.value.length >= 5) {
    notifications.value.shift(); // Remove the oldest notification
  }
  notifications.value.push({type: type});
}
</script>

<template>
  <main>
    <div class="buttons_container">
      <button @click="addNotification('Success')">Success</button>
      <button @click="addNotification('Danger')">Danger</button>
      <button @click="addNotification('Warning')">Warning</button>
      <button @click="addNotification('Info')">Info</button>
    </div>
    <div class="notifications_container">
      <BaseNotification v-for="notification in notifications" :key="notification" :type="notification.type" @close="notifications.splice(notifications.indexOf(notification), 1)"/>
    </div>
  </main>
</template>

<style scoped>

.notifications_container {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-end;
  padding: 16px;

}

button {
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background-color: var(--blue-dark);
  color: white;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  cursor: pointer;
}

button:hover {
  background-color: var(--blue-light);
}

.buttons_container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
}

</style>
