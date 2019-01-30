<template>
  <div id="app">
    <product-list-one v-bind:products="products"></product-list-one>
    <product-list-two v-bind:products="products"></product-list-two>
  </div>
</template>

<script>
  import ProductListOne from './components/ProductListOne'
  import ProductListTwo from './components/ProductListTwo'

  export default {
    components: {
      'product-list-one': ProductListOne,
      'product-list-two': ProductListTwo
    },
    name: 'app',
    data(){
      return {
        products: [
          {name: 'Banana skin', price: 20},
          {name: 'Shiny star', price: 40},
          {name: 'Green shells', price: 60},
          {name: 'Red shells', price: 80}
        ]
      }
    }
  }
</script>

<style>
  body{
    font-family: Ubuntu;
    color: #555;
  }
</style>
