<template>
  <div class="view-item">
    <router-link :to="{path: '/detail', query: {field: 'view', id: data.id}}">
     <div class="img">
        <img class="view-img" :src="data.img" :alt="data.name" />
     </div>
     <div class="info">
        <h1 class="title">{{data.name}}</h1>
        <p class="stars">
            <stars :starNum="Number(data.star)"></stars>
           <span class="score">{{ data.score }}分</span> 
        </p>
        <p class="others">
            <span class="item">
                <span class="price">¥ {{ data.default_price }} 起</span>
                <span class="city-name">{{data.city_name}}</span>
            </span>
        </p>
     </div>
    </router-link>
  </div>
</template>

<script>
import Stars from '../Sub/Stars.vue';

export default {
    name: 'ViewListSub',
    components: {
        Stars
    },
    props:{
        data: Object
    }

}
</script>

<style scoped>
.view-item {
    width: 50%;
    background-color: #fff;
     box-sizing: border-box;
     padding: 0.05rem;
     border-bottom: 1px solid #ddd;
}
.img{
    width: 100%;
    height: 1.1rem;
    overflow: hidden;
 
}
.view-img {
      width: 100%;
      min-height: 1.1rem;
}
.info {
    margin: .05rem;
}

.title{
    display: inline-block;
    font-size: .18rem;
    margin-top: .05rem;
    overflow: hidden;
     text-overflow: ellipsis;
     white-space: nowrap;
}
.score {
    font-size: .16rem;
}
.others {
   position: relative;
    }
 .price {
    font-size: 0.14rem;
    color:#06c1ae;
}
.city-name{
    position: absolute;
    right: .05rem;
    top: 0.1rem;
    font-size: .14rem;
}
</style>