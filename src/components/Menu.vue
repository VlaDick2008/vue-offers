<template>
  <div class="menu-wrapper">
    <h2 class="menu-title">Меню</h2>
    <div class="menu-buttons">
      <button @click="addModal = !addModal" class="menu-button">Создать запись</button>
      <button @click="getModal = !getModal" class="menu-button">Получить записи</button>
      <button disabled class="menu-button">Что-то ещё...</button>
      <button disabled class="menu-button">Что-то ещё...</button>
    </div>
    <teleport to="body">
      <AddModal @closeModal="addModal = !addModal" :modalVisibility="addModal" />
      <GetModal @closeModal="getModal = !getModal" :modalVisibility="getModal" />
    </teleport>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useOffersStore } from '../stores/offers';
import AddModal from './AddModal.vue';
import GetModal from './GetModal.vue';

const storeOffers = useOffersStore();
const addModal = ref(false);
const getModal = ref(false);

onMounted(async () => {
  await axios
    .get('http://api.staging.umeu.app/test/categories')
    .then((res) => (storeOffers.categories = res.data.result.categories));
});
</script>

<style scoped lang="scss">
.menu-wrapper {
  padding: 10px;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
}

.menu-title {
  align-self: flex-end;
  margin-bottom: 15px;
}

.menu-buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  .menu-button {
    background-color: #50c8e9;
    border: none;
    padding: 10px;
    border-radius: 5px;
    color: #000000;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      background-color: #4daec8;
      color: #292929;
    }

    &:disabled {
      background-color: #409cb6;
      border: 1px solid #37869b;
      color: rgb(196, 196, 196);
      cursor: not-allowed;
    }
  }
}

@media (max-width: 500px) {
  .menu-wrapper {
    border: 3px solid #000;
  }
  .menu-title {
    align-self: center;
  }
}
</style>
