<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <city-scroll-wrapper></city-scroll-wrapper>
  </div>
</template>

<script>
import CommonHeader from '../components/Header/common.vue';
import CityScrollWrapper from '../components/ScrollWrapper/City'

export default {
    name:'City',
    components: {
        CommonHeader,
        CityScrollWrapper,
    },
    data(){
        return {
            title : '城市选择'
        }
    }
}
</script>

<style >

</style>