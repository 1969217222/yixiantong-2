<template>
   <div class="search-input">
    <div class="input-wrapper">
        <span class="iconfont icon-header-search" ></span>
        <input type="text" class="input" v-model="keyword" :placeholder="placeholder" @input="onSearch">
     

    </div>
   </div>
</template>

<script>
import { mapState } from 'vuex'
import { SearchModel } from'../../models/search'
import tools from '../../utils/tools'

export default {
    name:'SearchInput',
    data() {
        return {
            keyword: '',
            placeholder: '美食 / 景点 / 酒店 / KTV / 按摩',
        }
    },
    computed:{
        ...mapState(['cityId'])
    },
    methods:{
        onSearch (){
            const keyword = tools.trimSpace(this.keyword)
            if(keyword.length <= 0) {
                this.$emit('onSearch', {})  // 自定义事件 小于0 返回空对象
                return
            }
         const searchModel = new SearchModel()
         searchModel.searchAction(keyword, this.cityId).then((res) =>{
                this.$emit('onSearch', res)   // 自定义事件, 返回res数据
            })
        }
    },
}
</script>

<style scoped>
    .search-input {
		height: .44rem;
		padding: .06rem .15rem;
		background-color: #fff;
		box-sizing: border-box;
    }
    .input-wrapper{
        position: relative;
        width: 100%;
        height: 100%;
    }
    .position-warp{
        position: absolute;
        top:30px;
        left:0px;
    }
    .text{
        font-size:12px;
    }
    .iconfont {
    		position: absolute;
    		top: .08rem;
    		left: .08rem;
    		font-size: .16rem;
    	}
    .input {
    		width: 100%;
    		height: 100%;
    		border: 1px solid #ddd;
    		box-sizing: border-box;
    		font-size: .14rem;
    		text-indent: .32rem;
    	}
</style>