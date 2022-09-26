<template>
   <div class="name-bd">
    <span class="iconfont icon-name"></span>
     <span class="name-text">{{name}}</span>
   </div>
</template>

<script>
export default {
    name: 'DetailName',
    props:{
        name:{
            type: String,
            default (){
                return '名称加载中...'
            }
        }
    }
}
</script>

<style scoped>
    .name-bd{
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
  	box-sizing: border-box;
    }
    .icon-name {
        margin-left: .1rem;
        vertical-align: middle;
    }
    .name-text {
        padding: .13rem 0;
        font-size: .19rem;
        color: #000;
        margin-left: .05rem;
    }
</style>