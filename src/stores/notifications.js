import {defineStore} from "pinia";

export const useNotificationsStore = defineStore({
    id: 'notifications',
    state: () => ({
        notifications: [{ type: "Success"},
            { type: "Danger"},
            { type: "Warning"},
            { type: "Info"}]
    }),
    actions: {
        addNotification(notification) {
            if (this.notifications.length > 5) {
                this.notifications.shift()
            }
            this.notifications.push(notification)
        },
        removeNotification(notification) {
            this.notifications = this.notifications.filter(n => n !== notification)
        }
    },
    getters: {
        allNotifications() {
            return this.notifications;
        },
        getNotificationById: (state) => (id) => {
            return state.notifications.find(notification => notification.id === id);
        }
        }
    })
