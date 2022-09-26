<template>
 <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-conetent">
      <div v-if="!errorShow">
        <detail-swiper :pic="detailData.pics"></detail-swiper>
            <detail-food 
               v-if="field === 'food'"
               :name="detailData.name"
               :starNum="Number(detailData.star)"
               :score="detailData.score"
               :address="detailData.address"
               :price="detailData.default_price"
               :DateTime="detailData.open_datetime"
               :recom="detailData.recom"
               :keyword="detailData.comment_keyword"
            ></detail-food>
            
            <detail-hotel
             v-if="field === 'hotel'"
             :name="detailData.name"
            :starNum="Number(detailData.star)"
            :score="detailData.score"
            :address="detailData.address"
            :price="detailData.default_price"
            :service="detailData.service"
            ></detail-hotel>
            
            <detail-view
            v-if=" field === 'view'"
            :name="detailData.name"
            :starNum="Number(detailData.star)"
            :score="detailData.score"
            :address="detailData.address"
            :price="detailData.default_price"
            :DateTime="detailData.open_datetime"
            :tip="detailData.tip"
            :intro="detailData.intro" 
            :info="detailData.ticket_info"
            ></detail-view>
            
            <detail-ktv 
            v-if="field === 'ktv'"
            :name="detailData.name"
            :starNum="Number(detailData.star)"
            :score="detailData.score"
            :address="detailData.address"
            :price="detailData.default_price"
            :service="detailData.service"
            ></detail-ktv>
            
            <detail-massage
            v-if="field === 'massage'"
            :name="detailData.name"
            :starNum="Number(detailData.star)"
            :score="detailData.score"
            :address="detailData.address"
            :price="detailData.default_price"
            :DateTime="detailData.open_datetime"
            :keyword="detailData.comment_keyword"
            ></detail-massage>
      </div>

    <error 
         :errorShow="errorShow"
        ></error>
    </div>
 </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import { DetailModel } from '../../models/detail';
import tools from '../../utils/tools'
import DetailSwiper from './Sub/Swiper.vue'

import DetailFood from './Detail/Food.vue'
import DetailHotel from './Detail/Hotel.vue'
import DetailView from './Detail/View.vue'
import DetailKtv from './Detail/Ktv.vue'
import DetailMassage from './Detail/Massage.vue'
import Error from './Sub/Error.vue';

export default {
    name:'DetailScrollWrapper',
    components: {
        DetailSwiper,
        DetailFood,
        DetailHotel,
        DetailView,
        DetailKtv,
        DetailMassage,
        Error,
    },
    data() {
        return {
            id: 0,
            errorShow: false,
            detailData: {},
           
        }
    },
     mounted (){
        this.scroll = new BetterScroll(this.$refs.wrapper)
        this.field = this.$route.query.field;
        this.id = this.$route.query.id;
        this.getDetail(this.field, this.id);
     },
     activated (){
      this.currentField = this.$route.query.field
      this.currentId = this.$route.query.id

      if(this.currentField !== this.field || this.currentId !== this.id){
         this.field = this.currentField
         this.id = this.currentId
         this.getDetail(this.field, this.id);
      } 
     },
     methods:{
        getDetail(field,id){
            const detailModel = new DetailModel()
           
            detailModel.getDetail(field,id).then((res)=>{
              
              if (res && res.status === 0 ) {
                const data = res.data

                this.errorShow = false 
                data.pics && (data.pics = tools.jsonToArr(data.pics))
                data.comment_keyword && (data.comment_keyword = tools.strToArr(data.comment_keyword))
                data.recom && (data.recom = tools.replaceToSpace(data.recom))
                data.service && (data.service = tools.jsonToArr(data.service))
                
                this.detailData = data
               console.log('我是新数据',this.detailData)
             } else {
              
              this.errorShow = true
             }
            })
        }
     }
}
</script>

<style>

</style>