<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  type: String,
});
</script>

<template>
  <div :class="['notification', type]">
    <div class="modal_header">
      <img src="../assets/icons/CheckCircle.svg"  alt="check" v-if="type === 'Success'"/>
      <img src="../assets/icons/Info.svg" alt="info" v-if="type === 'Info'"/>
      <img src="../assets/icons/Warning.svg" alt="warning" v-if="type === 'Warning'"/>
      <img src="../assets/icons/Danger.svg" alt="Danger" v-if="type === 'Danger'"/>
      <h1>Modal Window</h1>
      <img src="../assets/icons/Close.svg" alt="close" class="close" @click="$emit('close')"/>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
    </p>
  </div>

</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

.notification {
  width: 527px;
  padding: 24px;
  border-radius: 16px;
  margin: 1rem 0;
  box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 8px;

}


.Danger {
  background-color: var(--red-light);
  border: 2px solid var(--red-dark);
}

.Success {
  background-color: var(--green-light);
  border: 2px solid var(--green-dark);
}

.Warning {
  background-color: var(--yellow-light);
  border: 2px solid var(--yellow-dark);
}

.Info {
  background-color: var(--blue-light);
  border: 2px solid var(--blue-dark);
}


.modal_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: 100%;

  img {
    width: 32px;
    height: 32px;
  }

  h1 {
    width: 100%;
    flex-shrink: 1;
    font-family: DM Sans,serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    text-align: left;
    color: var(--black);
  }


}
p {
  font-family: DM Sans, serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  padding-left: 48px;
  color: var(--black-light);
}

.close{
  cursor: pointer;
  width: 20px;
  height: 20px;
}
</style>