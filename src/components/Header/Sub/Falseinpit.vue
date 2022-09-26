<template>
  <div class="false-input">
    <router-link to="Search">
        <div class="input">
            <span class="iconfont icon-header-search"></span>
            <span class="text"> {{text}}</span>
        </div>
    </router-link>
  </div>
</template>

<script>
export default {
    name: 'FalseInput',
    data(){
        return {
            text: '美食 / 景点 / 酒店 / 按摩 /KTV'
        }
    }
}
</script>

<style scoped>
.false-input{
    
    flex: 1;
    padding: .06rem .08rem .06rem .06rem;
    box-sizing: border-box;

}
.input{
    display: flex;
  justify-content: center;  
    font-size: .15rem;
    line-height: .5rem;
    background-color: #fff;
    height: 100%;
    width: 100%;
    border-radius: .05rem;
}
.icon-header-search {
    font-size: .16rem;
    line-height: .4rem;
    margin-right: .03rem;
    color:#999
}
.text{
  line-height: .4rem;
  color:#999;
}
</style>