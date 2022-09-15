<template>
  <div>
    <h1>Products</h1>
    <product-card
      v-if="receivedProductId"
      :img-src="currentProduct.imgSrc"
      :title="currentProduct.title"
      :price="currentProduct.price"
      :sales="currentProduct.sales"
    />
    <product-list v-else :product-list-data="listData" />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'
import ProductCard from '@/components/ProductList/ProductCard'
export default {
  name: 'Products',

  components: {
    ProductList,
    ProductCard,
  },

  computed: {
    receivedProductId() {
      return this.$route.params.id
    },
    currentProduct() {
      return this.receivedProductId
        ? this.listData.find((item) => item.id == this.receivedProductId)
        : {}
    },
  },

  data() {
    return {
      listData: [
        {
          id: 1,
          imgSrc:
            'https://content1.rozetka.com.ua/goods/images/preview/231359985.png',
          title: 'Смарт-годинник Amazfit GTR 3 Pro Brown Leather',
          price: 2000,
          sales: true,
        },
        {
          id: 2,
          imgSrc:
            'https://content1.rozetka.com.ua/goods/images/preview/231359985.png',
          title: 'Смарт-годинник Amazfit GTR 3 Pro Brown Leather',
          price: 5999,
          sales: false,
        },
        {
          id: 3,
          imgSrc:
            'https://content1.rozetka.com.ua/goods/images/preview/231359985.png',
          title: 'Смарт-годинник Amazfit GTR 3 Pro Brown Leather',
          price: 1000,
          sales: true,
        },
        {
          id: 4,
          imgSrc:
            'https://content1.rozetka.com.ua/goods/images/preview/231359985.png',
          title: 'Смарт-годинник Amazfit GTR 3 Pro Brown Leather',
          price: 1000,
          sales: false,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
