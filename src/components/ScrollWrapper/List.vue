<template>
<div class="scroll-wr" ref="wrapper">
    <div class="scroll-content">
        <div 
        v-if="!errorShow"
        >
     <food-list
         v-if="field === 'food'"
         :foodDatas="listDatas"
        ></food-list>

        <hotel-list
        v-if="field === 'hotel'"
        :hotelDatas="listDatas"
        ></hotel-list>

        <view-list
        v-if="field === 'view'"
        :viewDatas=" listDatas"
        ></view-list>

        <ktv-list
        v-if="field === 'kev'"
        :ktvDatas=" listDatas"
        ></ktv-list>
        <massage-list
        v-if="field === 'massage'"
        :massageDatas=" listDatas"
        ></massage-list>

        <loading
        :loadingShow="loadingShow"
        ></loading>
    </div>

    <error 
    :errorShow="errorShow"
    ></error>
    </div>
</div>
</template>

<script>
 import BetterScroll from 'better-scroll'
 import { mapState } from 'vuex';
 import { ListModel} from '../../models/list'
 import tools from '../../utils/tools';

import FoodList from './FoodList/Index.vue'
import HotelList from './HotelList/index.vue'
import ViewList from './ViewList/index.vue'
import KtvList from './KtvList/index.vue'
import MassageList from './MassageList/index.vue'
import Loading from './Sub/Loading.vue';
import Error from './Sub/Error.vue';

export default { 
    name: 'ListScrollWrapper',
    data() {
        return{
            listDatas: [],
            errorShow: false,
            loadingShow: true
        }
    },
    components: {
        FoodList,
        HotelList,
        ViewList,
        KtvList,
        MassageList,
        Loading,
        Error
    },
    computed:{
        ...mapState(['cityId', 'field'])
    },
    mounted(){
        this.scroll = new BetterScroll(this.$refs.wrapper)
        this.getListDatas(this.cityId, this.field)
    },
    methods:{ 
        getListDatas(cityId, field) {
            if(!this.getListDatas[cityId]) {
            const listModel = new ListModel()
            this.loadingShow= true

            listModel.getListDatas(cityId, field).then((res)=>{
                if(res && res.status === 0) {
                    
                    const data = tools.formatJSON(res.data, 'keyword')
                    
                    this.errorShoe = false
                    setTimeout(()=>{
                        this.listDatas = data
                        this.loadingShow = false
                    },100)
                } else {
                    this.errorShow = true
                    console.log(2)
                }
            })

            }
            
        }
    },
    watch: {
        cityId(){
            this.getListDatas(this.cityId,this.field)  // tab栏发生变化就重新执行一次此代码
        }
    }
}
</script>

<style>

</style>