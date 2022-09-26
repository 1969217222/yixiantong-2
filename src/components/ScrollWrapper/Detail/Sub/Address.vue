<template>
   <div class="address-bd">
    <span class="iconfont icon-positioning" ></span>
    <span class="address-text">{{address}}</span>
   </div>
</template>

<script>
export default {
    name: 'DetailAddress',
    props:{
        address:{
            type: String,
            default (){
                return '加载中'
            }
        }
    }
}
</script>

<style scoped>
.address-bd{
    display: flex;
    align-items: center;
     min-height: .44rem;
        background-color: #fff;
        border-bottom: 1px solid #ddd;
        box-sizing: border-box;
    }
    .icon-positioning {
        margin-left: .1rem;
        color: #999
    }
    .address-text {

        font-size: .16rem;
        color: #000;
        margin-left: .1rem;
    }
</style>