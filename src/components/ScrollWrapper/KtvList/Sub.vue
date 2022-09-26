<template>
   <div class="ktv-item">
    <router-link :to="{path:'./detail', query: {field:'ktv', id:data.id}}">
     <div class="img">
        <img :src="data.img" :alt="data.name" class="ktv-img" />
     </div>
     <div class="info">
        <h1 class="title">{{data.name}}</h1>
        <p class="stars">
            <stars :starNum="Number(data.star)"></stars>
            <span class="score">{{data.score}}分</span>
        </p>
        
        <p class="others">
            <span class="price">{{data.default_price}}元起</span>
            <span class="city-name">{{data.area}}</span>
        </p>
     </div>
    </router-link>
   </div>
</template>

<script>
import Stars from '../Sub/Stars.vue';

export default {
    name: 'KtvListSub',
    components:{
        Stars
    },
    props: {
        data: Object
    }
}
</script>

<style scoped>
.ktv-item{
    position: relative;
    border-bottom: 1px solid #ddd;
     background-color: #fff;
}
.img{
    height: 1.2rem;
    width: 1.2rem;
    padding: 0.1rem;
    box-sizing: border-box;
}
.ktv-img {
    
    width: 100%;
    height: 100%;
}
.info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0.1rem 0.1rem 0 1.2rem;
    box-sizing: border-box;
}
.title{
     white-space: nowrap; 
     overflow: hidden;
     text-overflow: ellipsis;
    font-size: .18rem;
    line-height: .2rem;
}
.score {
    line-height: .5rem;
    font-size: .16rem;
    color:#f5c164;
}
.others{
    display: flex;
    justify-content: space-between;
    font-size: .14rem;
    line-height: .3rem;
}
</style>