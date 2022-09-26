<template>
  <div class="service-bd">
    <detail-title 
    icon="icon-intro"
    title="商家服务"
    ></detail-title>
    <span class="service">
        <span class="service-text" >
            <p>停车场: {{service && service.parking ? '有' : '无'}}</p>
            <p>WIFI: {{service && service.wifi ? '有' : '无'}}</p>
        </span>
    </span>
  </div>
</template>

<script>
import DetailTitle from './Title.vue';

export default {
    name: 'DetailService',
    components:{
        DetailTitle
    },
    props:{
        service: Object
    }
}
</script>

<style scoped>
p{
    line-height: .35rem;
    height: 0.35rem;
    font-size: .16rem;
    padding: 0 .1rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    color:black;
}
</style>