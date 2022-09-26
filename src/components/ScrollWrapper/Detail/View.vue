<template>
   <div class="detail-wrapper">
    <detail-name :name="name"></detail-name>
    <detail-stars :score="score" :starNum="starNum"></detail-stars>
    <detail-address :address="address"></detail-address>
    <detail-price :price="price"></detail-price>
    <detail-open-date-time :DateTime="DateTime"></detail-open-date-time>
    <detail-tip :tip="tip"></detail-tip>
    <detail-intro :intro="intro"></detail-intro>
    <detail-info :info="info"></detail-info>
   </div>
</template>

<script>
import DetailName from './Sub/Name.vue'
import DetailStars from './Sub/Stars.vue'
import DetailAddress from './Sub/Address.vue'
import DetailPrice from './Sub/Price.vue'
import DetailOpenDateTime from './Sub/OpenDateTime.vue'
import DetailRecom from './Sub/Recom.vue'
import DetailTip from './Sub/Tip.vue'
import DetailIntro from './Sub/Intro.vue'
import DetailInfo from './Sub/TicketInfo.vue'

export default {
    name: 'DetailView',
    components:{
        DetailName,
        DetailStars,
        DetailAddress,
        DetailPrice,
        DetailOpenDateTime,
        DetailRecom,
        DetailOpenDateTime,
        DetailTip,
        DetailIntro,
        DetailInfo,
    },
    props:{
        name: String,
        starNum: Number,
        score: String,
        address:String,
        price: String,
        DateTime: String,
        recom: String,
        DateTime: String,
        tip: String,
        intro: String,
        info: String,
    }
}
</script>

<style>

</style>