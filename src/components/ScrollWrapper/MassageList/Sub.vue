<template>
   <div class="msg-item">
     <router-link :to="{path:'/detail', query:{field:'massage', id: data.id}}">
     <div class="img">
        <img :src="data.img" :alt="data.name" class="msg-img" />
     </div>
     <div class="info">
        <span class="title">{{data.name}}</span>
        <p class="stars">
            <stars :starNum="Number(data.star)"></stars>
            <span class="score">{{data.score}}分</span>
        </p>
          <div class="others">
             <span class="price">¥{{data.default_price}}人</span>
             <span class="item">{{data.city_name}}</span>
          </div>
     </div>
     </router-link>
   </div>
</template>

<script>
import Stars from '../Sub/Stars.vue';

export default {
    name: 'MassageListSub',
    components:{
        Stars
    },
    props: {
        data: Object
    }
}
</script>

<style scoped>
.msg-item {
    position: relative;
    border-bottom : 1px solid #ddd;
    background-color: #fff;
}
.img {
    height: 1.2rem;
    width: 1.2rem;
    padding: 0.1rem;
    box-sizing: border-box;
}
.msg-img {
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
.title {
    font-size: .2rem;
      white-space: nowrap; 
     overflow: hidden;
     text-overflow: ellipsis;
    line-height: .2rem;
}
.score {
    line-height: .4rem;
    font-size: 0.2em;
    color:#f5c164;

}
.others {
    display: flex;
    justify-content: space-between;
    font-size: .14rem;
    line-height: .5rem;
}
.price {
    color: orange;
}
</style>