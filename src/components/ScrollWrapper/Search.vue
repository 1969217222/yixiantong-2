<template>
  <div class="scroll-wr" ref="wrapper">
    <div class="scroll-content">

       

        <div v-if="!data.status">

             <no-data-tip v-show="
            (!data.viewDatas || data.viewDatas.length <= 0) &&
            (!data.foodDatas || data.foodDatas.length <= 0) &&
	        (!data.hotelDatas || data.hotelDatas.length <= 0) &&
	        (!data.massageDatas || data.massageDatas.length <= 0) &&
	        (!data.ktvDatas || data.ktvDatas.length <= 0)
            "></no-data-tip>

        <div v-if="data.viewDatas && data.viewDatas.length > 0 ">
        <home-title title="景点结果"></home-title>
        <view-list :viewDatas="data.viewDatas"></view-list>
        </div>
     
        <div v-if="data.foodDatas && data.foodDatas.length >0 ">
        <home-title title="美食结果"></home-title>
        <food-list :foodDatas="data.foodDatas"></food-list>
        </div>

        <div v-if="data.ktvDatas && data.ktvDatas.length > 0">
            <home-title title="KTV结果"></home-title>
            <ktv-list :ktvDatas="data.ktvDatas"></ktv-list>
        </div>

        <div v-if="data.massageDatas && data.massageDatas.length >0 ">
         <home-title title="按摩结果"></home-title>
          <massage-list :massageDatas="data.massageDatas"></massage-list>
        </div>
      </div>

      <error :errorShow="data.status === -1"></error>
    </div>
</div>
</template>

<script>
import BetterScroll from 'better-scroll'

import HomeTitle from './Sub/HomeTitle.vue'
import ViewList from './ViewList/index.vue'
import HotelList from './HotelList/index.vue'
import FoodList from './FoodList/Index.vue'
import KtvList from './KtvList/index.vue'
import MassageList from './MassageList/index.vue'
import NoDataTip from './Sub/NoDataTip.vue'
import Error from './Sub/Error.vue'

export default {
    name: 'SearchScrollWrapper',
    components:{
        ViewList,
        HotelList,
        FoodList,
        KtvList,
        MassageList,
        HomeTitle,
        NoDataTip,
        Error,
    },
    props:{
        data: Object
    },
    data(){
        return {
           errorShow: false
        }
    },
     mounted(){
        this.scroll = new BetterScroll(this.$refs.wrapper)
     }
}

</script>

<style scoped>

</style>>

