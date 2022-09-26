<template>
  <div class="stars-bd">
    <span class="iconfont icon-smile"></span>
    <stars :starNum="starNum"></stars>
    <span class="stars-text">{{score}}分</span>
  </div>
</template>

<script>
import Stars from '../../Sub/Stars.vue';

export default {
    name: 'DetailStars',
    components:{
        Stars
    },
    props:{
        starNum: {
                type: Number,
                default (){
                    return 0
                }
            },
        score: {
            type: String,
            default () {
                return '0.0'
            },
        
        } 
    }
}
</script>

<style scoped>
    .stars-bd{
        background-color: #fff;
        border-bottom: 1px solid #ddd;
    }
    .icon-smile {
        margin-left: .1rem;
    }
    .stars-text {
        line-height: .4rem;
        font-size: .16rem;
        color:  #f60;
    }
</style>