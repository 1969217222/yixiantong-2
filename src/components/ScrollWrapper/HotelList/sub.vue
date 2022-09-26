<template>
  <div class="hotel-item">
    <router-link :to="{path:'/detail', query: {field: 'hotel' , id: data.id}} ">
    <div class="img">
        <img class="hotel-img" :src="data.img" :alt="data.name" />
    </div>
    <div class="info">
        <h1 class="title">{{data.name}}</h1>
         <div class="stars">
            <stars :starNum="Number(data.star)"></stars>
            <p class="score">{{data.score}}分</p>
         </div>
        
        <p class="area">{{data.area}}</p>
        <p class="others">
            <span class="item">
                <span class="price">¥{{data.default_price}}元</span>
            </span>
        
        <span class="city-name">{{data.city_name}}</span>
         </p>
    </div>
    
    </router-link>
  </div>
</template>

<script>
    import Stars from '../Sub/Stars'
export default {
    name: 'HotelListSub',
    components:{
        Stars
    },
    props: {
        data: Object
    }
}
</script>

<style scoped>
.hotel-item{
    position: relative;
    border-bottom : 1px solid #ddd;
    background-color: #fff;
}
.img {
    width: 1.2rem;
    height: 1.2rem;
    padding: 0.1rem;
    box-sizing: border-box;
}
.hotel-img{
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
.stars{
    display: flex;
    line-height: 0.3rem;
}
.score {
    margin-left: .04rem;
    line-height: .38rem;
    font-size: .14rem;
    color:#f5c164;
    
}
.area {
    display: flex;
    font-size:.14rem;
    color:#999;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: .3rem;
}
.others {
    display: flex;
    justify-content: space-between;
}
.item {
    font-size: .14rem;
}
.item:nth-child(1) {
    color:#06c1a1
}
.price {
    font-size: 0.14rem;
    margin-top: 0.05rem;
}
.city-name {
    font-size: 0.14rem;
}
</style>