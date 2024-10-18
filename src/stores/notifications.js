// stores/notification.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNotificationStore = defineStore('notification', () => {
    const notifications = ref([]);

    // Actions
    function createNotification(type) {
        const id = Date.now();
        if( notifications.value.length >= 5){
            notifications.value.shift();
        }
        notifications.value.push({ id, type });
    }

    function deleteNotification(id) {
        notifications.value = notifications.value.filter(n => n.id !== id);
    }

    // Getters
    function getAllNotifications() {
        return notifications.value;
    }

    function getNotificationById(id) {
        return notifications.value.find(n => n.id === id);
    }

    return {
        notifications,
        createNotification,
        deleteNotification,
        getAllNotifications,
        getNotificationById,
    };
});
