<template>
  <nav class="tab">
    <tab-sub
    v-for="(item, index) in cityDatas"
    :cityInfo="item"
    :key="index"
    ></tab-sub>
  </nav>
</template>

<script>
import TabSub from './Sub.vue'
import cityDatas from '../../assets/data/cities'

export default {
    name: 'Tab',
    components:{
        TabSub
    },
    data(){
        return {
            cityDatas
        }
    }
}
</script>

<style scoped>
.tab{
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    height: 0.44rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
}
</style>