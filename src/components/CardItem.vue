<template>
  <div class="card-wrapper">
    <div class="card-ico-wrapper"><img class="card-ico" src="img/ico2.jpg" alt="" /></div>
    <div class="card-data">
      <h1 class="card-title">{{ props.title }}</h1>
      <div class="card-price">{{ props.price }} $</div>
      <div v-if="props.dateEnd !== null">
        <div class="card-deadline">Дедлайн: {{ props.dateEnd }}</div>
      </div>
      <div v-else>
        <div class="card-deadline">Дедлайн: Неизвестен</div>
      </div>
      <div class="card-category">| {{ props.category }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({ title: String, price: Number, category: String, dateEnd: String });
</script>

<style lang="scss" scoped>
.card-wrapper {
  padding: 20px;
  margin-bottom: 25px;
  border: 2px solid black;
  display: flex;
  border-radius: 10px;
}

.card-ico-wrapper {
  margin-right: 15px;
}
.card-ico {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
}

.card-price {
  font-size: 20px;
  color: #4e4e4e;
  font-style: italic;
  margin-top: 5px;
  font-weight: 500;
}

.card-category {
  font-size: 20px;
  margin-top: 5px;
  font-weight: bold;
}

@media (max-width: 500px) {
  .card-title {
    font-size: 20px;
  }

  .card-price {
    font-size: 18px;
  }

  .card-category {
    font-size: 18px;
  }
}
</style>
