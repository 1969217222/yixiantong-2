<template>
   <div class="ktv-list">
    <ktv-list-sub 
    v-for="(item, index) in ktvDatas"
    :data="item"
    :key="index"
    ></ktv-list-sub>
   </div>
</template>

<script>
import KtvListSub from './Sub.vue'

export default {
    name: 'KtvList',
    components: {
        KtvListSub
    },
    props:{
        ktvDatas: Array
    }
}
</script>

<style>

</style>