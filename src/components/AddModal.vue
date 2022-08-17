<template>
  <div class="add-modal" v-if="props.modalVisibility">
    <div class="modal-wrapper">
      <div class="modal-title">Создание задания</div>
      <div class="modal-inputs-add">
        <div class="modal-input">
          <div class="modal-input-title">Название задания</div>
          <input v-model="modalFields.title" class="modal-input-field" type="text" />
        </div>
        <div class="modal-input">
          <div class="modal-input-title">Дата начала</div>
          <input v-model="modalFields.dateBegin" class="modal-input-field" type="text" />
        </div>
        <div class="modal-input">
          <div class="modal-input-title">Дедлайн</div>
          <input v-model="modalFields.dateEnd" class="modal-input-field" type="text" />
        </div>
        <div class="modal-input">
          <div class="modal-input-title">Категория</div>
          <select v-model="modalFields.category" class="modal-input-field" name="category" id="">
            <option
              :value="category.id"
              :key="category.id"
              v-for="category in storeOffers.categories"
            >
              {{ category.title }}
            </option>
          </select>
        </div>
        <div class="modal-input">
          <div class="modal-input-title">Цена</div>
          <input v-model="modalFields.price" class="modal-input-field" type="text" />
        </div>
      </div>
      <button @click="addModalBtn" class="modal-button">Создать</button>
      <button @click="closeModal" class="modal-button cancel">Отмена</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useOffersStore } from '../stores/offers';
import type { IGetModalFields } from '../../interfaces/IGetModalFields';
import axios from 'axios';
import { reactive } from 'vue';

const storeOffers = useOffersStore();
const props = defineProps({ modalVisibility: Boolean });
const emits = defineEmits(['closeModal']);

const modalFields: IGetModalFields = reactive({
  dateBegin: '2022-08-13T01:58:20.164Z',
  dateEnd: '2022-08-23T01:58:20.164Z',
  category: 0,
  price: 5000,
  title: 'test',
});

function closeModal() {
  emits('closeModal');
}

async function addModalBtn() {
  await axios
    .post('http://api.staging.umeu.app/test/task/create', {
      dateBegin: modalFields.dateBegin,
      dateEnd: modalFields.dateEnd,
      categoryId: modalFields.category,
      price: modalFields.price,
      title: modalFields.title,
    })
    .then((res) => {
      console.log(res);
    })
    .catch(() => {
      alert('Произошла ошибка при добавлении задания');
    });
  emits('closeModal');
}
</script>

<style lang="scss"></style>
