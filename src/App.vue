<template>
  <div class="bacground">
    <div class="main-wrapper">
      <div class="main-cards-wrapper">
        <CardItem
          v-for="offer in storeOffers.offers"
          :title="offer?.title"
          :price="offer?.price"
          :category="offer?.category"
          :dateEnd="offer?.dateEnd"
          :key="offer?.id"
        />
      </div>
      <div class="main-menu-wrapper">
        <Menu />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardItem from './components/CardItem.vue';
import Menu from './components/Menu.vue';
import { useOffersStore } from './stores/offers';

const storeOffers = useOffersStore();
</script>

<style lang="scss" scoped>
.bacground {
  background-color: #50c8e9;
  padding: 25px;
}
.main-wrapper {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 25px 25px 0 25px;
  border-radius: 25px;
}

.main-cards-wrapper {
  flex: 1;
  margin-right: 20px;
}

@media (max-width: 500px) {
  .main-wrapper {
    flex-direction: column-reverse;
  }
  .main-cards-wrapper {
    margin-right: 0;
  }
}

@media (max-width: 750px) {
  .main-wrapper {
    flex-direction: column-reverse;
  }
  .main-cards-wrapper {
    margin-right: 0;
  }
}
</style>
