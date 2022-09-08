<template>
  <div class="list-container">
    <!-- 3.Використовуємо компонент -->
    <product-card
      v-for="item in productListData"
      :key="item.id"
      :img-src="item.imgSrc"
      :title="item.title"
      :price="item.price"
      :sales="item.sales"
    />
  </div>
</template>

<script>
//1. Іморт зовнішнього компонента
import ProductCard from './ProductCard.vue'

export default {
  name: 'ProductList',

  //2. Реєструємо компонент
  components: {
    ProductCard,
  },

  props: {
    productListData: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="css" scoped>
.list-container {
  display: flex;
}
</style>
