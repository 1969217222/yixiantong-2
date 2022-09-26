<template>
   <div class="keyword-bd">
     <detail-title
     icon="icon-haoping"
     title="评论关键词"
     ></detail-title>
     <div class="comment-keyword">
	  	<span class="keyword-text"
        v-for="(item, index) in keyword"
        :key="index"
        >{{item}}</span>
	  </div>
   </div>
   
</template>

<script>
import DetailTitle from './Title.vue'

export default {
    name: 'DetailKeyWord',
    components:{
        DetailTitle
    },
    props:{
        keyword:{
            type: Array,
            default () {
                return '评论加载中...'
            }
        }
    }
}
</script>

<style scoped>
 
.comment-keyword {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: .15rem;
    padding: .15rem 0  .1rem .05rem ;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    line-height: .25rem;
  	box-sizing: border-box;
  		
    }
.keyword-text{
        margin-top: .5rem;
        padding: 0 .05rem;
  		margin: .04rem;
        border: 1px solid #06c1ae;
        color: #06c1ae;
        border-radius: .3rem;
    }
</style>