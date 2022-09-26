<template>
  <div class="recom-bd">
    <detail-title 
    icon="icon-recom" 
    title="推荐菜品"
    ></detail-title>
     <div class="recom-text">{{recom}}</div>
  </div>
</template>

<script>
import DetailTitle from './Title.vue' 

export default {
    name: 'DetailRecom',
    components:{
        DetailTitle,
    },
    props:{
        recom:{
            type: String,
            default: '加载中'
        }
    }
}
</script>

<style scoped>
.recom-bd{
    font-size: .16rem;
    color:#000;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    }
.recom-text{
    text-indent : 2em;
    line-height: .25rem;
    padding: .1rem .1rem;
}
</style>