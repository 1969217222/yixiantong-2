<template>
   <div class="price-bd">
    <span class="iconfont icon-price"></span>
    <span class="price-text">{{price}}元起</span>
   </div>
</template>

<script>
export default {
    name:'DetailPrice',
    props:{
        price:{
            type: String,
            default () {
                return '0'
            }
        }
    }
}
</script>

<style scoped>
.price-bd{
        background-color: #fff;
        border-bottom: 1px solid #ddd;
    }
    .icon-price {
        margin-left: .1rem;
       
    }
    .price-text {
        line-height: .4rem;
        font-size: .16rem;
        color: orangered;
        margin-left: .03rem;
    }
</style>