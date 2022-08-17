<template>
  <div class="get-modal" v-if="props.modalVisibility">
    <div class="modal-wrapper">
      <div class="modal-inputs">
        <div class="modal-input">
          <div class="modal-input-title">Сколько хотите получить записей?</div>
          <input v-model="pagingCount" class="modal-input-field" type="text" />
        </div>
        <div class="modal-input">
          <div class="modal-input-title">С какой записи начать?</div>
          <input v-model="pagingAfter" class="modal-input-field" type="text" />
        </div>
      </div>
      <button @click="getModalBtn" class="modal-button">Получить</button>
      <button @click="closeModal" class="modal-button cancel">Отмена</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { ref } from 'vue';
import { useOffersStore } from '../stores/offers';

const storeOffers = useOffersStore();
const props = defineProps({ modalVisibility: Boolean });
const emits = defineEmits(['closeModal']);

const pagingCount = ref(5);
const pagingAfter = ref(0);

function closeModal() {
  emits('closeModal');
}

function getModalBtn() {
  getPosts(pagingCount.value, pagingAfter.value);
  emits('closeModal');
}

async function getPosts(pagingCount: number, pagingAfter: number) {
  await axios
    .get(
      `http://api.staging.umeu.app/test/tasks/search?pagingCount=${pagingCount}&pagingAfter=${pagingAfter}`,
    )
    .then((res) => (storeOffers.offers = res.data.result.offers))
    .catch(() => alert('Введите число'));
}
</script>

<style lang="scss"></style>
