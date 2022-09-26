<template>
    <div class="container">
        <common-header :title="title"></common-header>
        <tab></tab>
        <list-scroll-wrapper></list-scroll-wrapper>
    </div>
    </template>
    
    <script>
    import fieldDatas from '../assets/data/fields'
    import { mapState } from 'vuex'

import CommonHeader from '../components/Header/common.vue'
import ListScrollWrapper from '../components/ScrollWrapper/List.vue'
import Tab from '../components/Tab/Index.vue'

export default {
    name: 'List',
    components: {
        CommonHeader,
        ListScrollWrapper,
        Tab,
    },
    computed: {
        ...mapState(['field']),

        title () {
            if(this.field) {
                // 判断语句拿到它们的数据名称
             return fieldDatas.filter((item) => item.field === this.field)[0].iconText + '列表'

           } 
             
        }
    }
 }
</script>

<style >

</style>