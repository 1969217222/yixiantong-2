<template>
  <div class="food-list">
    <food-list-sub
    v-for="(item, index) in foodDatas"
    :data="item"
    :key="index"
></food-list-sub>
  </div>
</template>

<script>
import FoodListSub from './Sub.vue'

export default {
    name: 'FoodList',
    components: {
        FoodListSub,
    },
    props: {
        foodDatas: Array
    }
}
</script>

<style>

</style>