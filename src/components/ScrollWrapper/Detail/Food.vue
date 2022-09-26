<template>
   <div class="detail-wrapper">
    <detail-name :name="name"></detail-name>
    <detail-stars :score="score" :starNum="starNum"></detail-stars>
    <detail-address :address="address"></detail-address>
    <detail-price :price="price"></detail-price>
    <detail-open-date-time :DateTime="DateTime"></detail-open-date-time>
    <detail-recom :recom="recom"></detail-recom>
    <detail-key-word :keyword="keyword"></detail-key-word>
   </div>
</template>

<script>
import DetailName from './Sub/Name.vue'
import DetailStars from './Sub/Stars.vue'
import DetailAddress from './Sub/Address.vue'
import DetailPrice from './Sub/Price.vue'
import DetailOpenDateTime from './Sub/OpenDateTime.vue'
import DetailRecom from './Sub/Recom.vue'
import DetailKeyWord from './Sub/KeyWord.vue'

export default {
    name: 'DetailFood',
    components:{
        DetailName,
        DetailStars,
        DetailAddress,
        DetailPrice,
        DetailOpenDateTime,
        DetailRecom,
        DetailKeyWord,
    },
    props:{
        name: String,
        starNum: Number,
        score: String,
        address:String,
        price: String,
        DateTime: String,
        recom: String,
        keyword: Array
    }
}
</script>

<style>

</style>