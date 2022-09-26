<template>
   <div class="tip-bd">
    <span class="iconfont icon-tip"></span>
    <span class="tip-text">{{tip}}</span>
   </div>
</template>

<script>
export default {
    name: 'DetailTip',
    props:{
        tip: {
            type: String,
            default () {
                return '加载中...'
            }
        }
     }
}
</script>

<style scoped>
.tip-bd{
    display: flex;
    align-items: center;
     min-height: .44rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    }
    .icon-tip {
        margin-left: .1rem;
        color:#999
    }
    .tip-text{
        font-size: .18rem;
       margin: .1rem 0  .1rem  .1rem;
    }
</style>