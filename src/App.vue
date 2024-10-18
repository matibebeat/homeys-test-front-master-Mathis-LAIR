<script setup>
import BaseNotification  from "@/components/BaseNotification.vue";
import { useNotificationStore } from '@/stores/notifications'; // Import the store
import { computed } from "vue";
import { ref } from "vue";

const notificationStore = useNotificationStore();

const notifications = computed(() => notificationStore.getAllNotifications());

const createNotification = (type) => {
  notificationStore.createNotification(type);
};

const deleteNotification = (id) => {
  notificationStore.deleteNotification(id);
};


</script>

<template>
  <main>
    <div class="buttons_container">
      <button @click="createNotification('Success')">Success</button>
      <button @click="createNotification('Danger')">Danger</button>
      <button @click="createNotification('Warning')">Warning</button>
      <button @click="createNotification('Info')">Info</button>
    </div>
    <div class="notifications_container">
      <BaseNotification v-for="notification in notifications" :key="notification" :type="notification.type" @close="deleteNotification(notification.id)"/>
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
