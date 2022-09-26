<template>
    <div class="detail-wrapper">
    <detail-name :name="name"></detail-name>
    <detail-stars :score="score" :starNum="starNum"></detail-stars>
    <detail-address :address="address"></detail-address>
    <detail-price :price="price"></detail-price>
    <detail-open-date-time :DateTime="DateTime"></detail-open-date-time>
    <detail-key-word :keyword="keyword"></detail-key-word>
    <detail-service :service="service"></detail-service>
   </div>
</template>

<script>
import DetailName from './Sub/Name.vue'
import DetailStars from './Sub/Stars.vue'
import DetailAddress from './Sub/Address.vue'
import DetailPrice from './Sub/Price.vue'
import DetailOpenDateTime from './Sub/OpenDateTime.vue'
import DetailKeyWord from './Sub/KeyWord.vue'
import DetailService from './Sub/Service.vue'

export default {
       name: 'DetailMassage',
       components:{
        DetailName,
        DetailStars,
        DetailAddress,
        DetailPrice,
        DetailOpenDateTime,
        DetailKeyWord,
        DetailService
       },
       props:{
        name: String,
        starNum: Number,
        score: String,
        address:String,
        price: String,
        DateTime: String,
        keyword: Array,
        service: Object,
       }
}
</script>

<style>

</style>