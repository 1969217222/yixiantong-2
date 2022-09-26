<template>
  <div class="container">
    <common-header  :title="title"></common-header>
    <search-input @onSearch="onSearch"></search-input>
    <search-scroll-wrapper :data="data"></search-scroll-wrapper>
  </div>
</template>

<script>
import CommonHeader from '../components/Header/common.vue';
import SearchInput from '../components/SearchInput/Index.vue'
import SearchScrollWrapper from '../components/ScrollWrapper/Search.vue'

import tools from '../utils/tools'

export default {
    name: 'Search',
    components:{  
        CommonHeader,
        SearchInput,
        SearchScrollWrapper,
    },
    data() {
        return {
            title : '商家搜索',
            data: {}
        }
    },

    methods: {
			onSearch (res) {
        if (res && res.status ===0) {  
          const data =  res.data  // 保存data数据
          data.foodDatas = tools.formatJSON(data.foodDatas, 'keyword') // 把数据变成一个数组;
          this.data = data
        }else {
          this.data = res
          console.log('ws ', this.data)
        }
			}
		}
}
</script>

<style>

</style>