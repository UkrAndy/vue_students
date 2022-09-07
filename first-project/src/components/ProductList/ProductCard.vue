<template>
  <div class="card-container">
    <div class="card-header">
      <button>Ok</button>
    </div>
    <div class="card-image">
      <img :src="imgSrc" />
    </div>
    <div class="card-title">
      {{ title }}
    </div>
    <div class="card-price">
      {{ priceToShow }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',

  props: {
    imgSrc: {
      type: String,
      default:
        'https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg',
    },
    title: {
      type: String,
      default: 'No title',
    },
    price: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    priceToShow() {
      return `${this.price} грн.`
    },
  },
}
</script>

<style lang="css" scoped>
.card-container {
  width: 200px;
  height: 300px;
  border: 2px solid green;
  border-radius: 10px;
  margin: 20px;
  padding: 10px;
}
.card-image {
  padding: 10px;
}
.card-image img {
  width: 100%;
}
</style>
