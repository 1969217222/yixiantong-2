<template>
  <div class="info-bd">
    <detail-title icon="icon-info" title="购票信息"></detail-title>
    <span class="info-text">
       <p class="info">{{info}}</p>
    </span>
  </div>
</template>

<script>
import DetailTitle from './Title.vue';

export default {
    name: 'DetailInfo',
    components:{
        DetailTitle
    },
    props:{
        info:{
            type: String,
            default (){
                return '加载中...'
            }
        }
    }
}

</script>


<style scoped>
    .info-bd{
        display: flex;
        flex-direction:column;
         min-height: .44rem;
        background-color: #fff;
        border-bottom: 1px solid #ddd;
        box-sizing: border-box;
        }
    .info{
        font-size: .16rem;
        text-indent : 2em;
        line-height: .2rem;
        padding: .1rem .1rem;
    }
    </style>