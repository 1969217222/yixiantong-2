<template>
   <div class="title-bd">
     <h1>
        <span :class="['iconfont', icon]"></span>
        <span class="title">{{title}}</span>
     </h1>
   </div>
</template>

<script>
export default {
    name:"DetailTitle",
    props:{
        icon: String,
        title: String,
    }
}
</script>

<style scoped>
.title-bd {
    display: flex;
    align-items: center;
    height: 0.44rem;
    font-size: .2rem;
    padding: 0 .1rem;
    color: #06c1ae;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
}
</style>