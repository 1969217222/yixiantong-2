<template>
  <div class="food-item">
    <router-link :to="{ path:'/detail' , query: {field:'food', id: data.id}}">
     <div class="img">
      <img class="food-img" :src="data.img" alt="data.name" >
     </div>
     <div class="info">
      <h1 class="title">{{data.name}}</h1>
      <p class="stars">
        <stars :starNum="Number(data.star)"></stars>
        <span class="score">¥ {{data.default_price}} /人</span>
      </p>
      <p class="keyword">
        <span class="badge" v-for="(item) in data.keyword" :key="item"> {{item}}</span>
      </p>
      <p class="others">
        <span class="price">{{data.field}}</span>
        <span class="city-name">{{data.area}}</span>
      </p>
     </div>
    </router-link>
  </div>
</template>

<script>
import Stars from '../Sub/Stars.vue'

export default {
  name: 'FoodListSub',
   components: { 
    Stars 
    },
    props: {
      data: Object
    }
}
</script>

<style scoped>
.food-item {
  position: relative;
  display: flex;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
.img {
   float: left;
    width: 1.2rem;
    height: 1.2rem;
    padding: 0.1rem;
    box-sizing: border-box;
}
.food-img {
    width: 100%;
    height: 100%;
}
.info{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.1rem .1rem 0 1.2rem;
  font-size: .16rem;
  box-sizing: border-box;
}
.title {
  line-height: .2rem;
  white-space: nowrap;
font-size: .2rem;
color:#000
}
.stars {
  font-size: .14rem;
  line-height: 0.3rem;
}
.keyword {
  white-space: nowrap;
} 

.badge {
  line-height: .3rem;
  color: rgb(190, 158, 77);
 background-color:  rgb(251,244,228);
 font-size: .14rem;
}
.others {
  display: flex;
  justify-content: space-between;
  font-size: .14rem;
  line-height: .2rem;
}
</style>