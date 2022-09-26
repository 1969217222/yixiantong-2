<template>
<div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-conetent">
        <category-icons></category-icons>
        <home-title :title="homeTitle.viewTitle"></home-title>
        <view-list :viewDatas="homeDatas.viewDatas"></view-list>

        <home-title :title="homeTitle.foodTitle"></home-title>
        <food-list :foodDatas="homeDatas.foodDatas"></food-list>

        <home-title :title="homeTitle.hotelTitle"></home-title>
        <hotel-list :hotelDatas="homeDatas.hotelDatas"></hotel-list>

        <home-title :title="homeTitle.ktvTitle"></home-title>
        <ktv-list :ktvDatas="homeDatas.ktvDatas"></ktv-list>

        <home-title :title="homeTitle.massageTitle"></home-title>
        <massage-list :massageDatas="homeDatas.massageDatas"></massage-list>
    </div>
</div>
</template>

<script>
import BetterScroll from 'better-scroll'
import CategoryIcons from './CategoryIcons/Index.vue'
import HomeTitle from './Sub/HomeTitle.vue';

import ViewList from './ViewList/index.vue'
import FoodList from './FoodList/Index'
import HotelList from './HotelList/index.vue'
import KtvList from './KtvList/index.vue'
import MassageList from './MassageList/index.vue'


import { mapState } from 'vuex';
import { IndexModel } from '../../models/index';

import tools from '../../utils/tools'

export default {
    name: "HomeScrollWrapper",
    components: {
        CategoryIcons,
        HomeTitle,
        ViewList,
        FoodList,
        HotelList,
        KtvList,
        MassageList
    },
    data(){
        return {
        homeTitle: {
          currentCityId: 0,
          foodTitle: '推荐美食',
          hotelTitle:'推荐酒店',
          ktvTitle:'推荐KTV',
          massageTitle:'推荐按摩',
          viewTitle:'推荐景点',
        },

         homeDatas:{
            foodDatas: [],
            hotelDatas: [],
            ktvDatas:[],
            massageDatas:[],
            viewDatas: [] 
         }
           
        }
    },
    computed: {
        ...mapState(['cityId'])
    },
    mounted (){
        this.scroll = new BetterScroll(this.$refs.wrapper)
        this.currentCityId = this.cityId
        this.getHomeDatas(this.cityId)
    },
    activated(){
        if (this.currentCityId !== this.cityId) {
            this.currentCityId = this.cityId
            this.getHomeDatas(this.currentCityId)
        }
    },
    methods: {
        getHomeDatas (cityId) {
            const indexModel = new IndexModel()
            
           indexModel.getHomeDatas(cityId).then((res) =>{
            if (res && res.status === 0) {
                const data = res.data;
               
                this.homeDatas.foodDatas = tools.formatJSON(data.foodDatas, 'keyword')
                this.homeDatas.hotelDatas = data.hotelDatas
                this.homeDatas.ktvDatas = data.ktvDatas
                this.homeDatas.massageDatas = data.massageDatas
                this.homeDatas.viewDatas = data.viewDatas    
                console.log(this.homeDatas.foodDatas);            
            }
          })
        }
    }

}
</script>

<style>

</style>