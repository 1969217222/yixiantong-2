<template>
   <div class="hotel-list">
     <hotel-list-sub 
     v-for="(item, index) in hotelDatas"
     :key="index"
     :data="item"
     ></hotel-list-sub>
   </div>
</template>

<script>
import HotelListSub from './sub.vue'

export default {
  name: 'HotelList',
  components: {
    HotelListSub
  },
  props:{
    hotelDatas: Array
  }
}
</script>

<style>

</style>