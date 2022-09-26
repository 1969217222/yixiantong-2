<template>
  <div :class="['tab-item', {current: cityInfo.cityId === this.cityId}]" @click="onTabClick(cityInfo)">
		<span>{{cityInfo.cityName}}</span>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'TabSub',
    props:{
        cityInfo: Object,
    },
    computed: {
        ...mapState(['cityId']),
        
    },
    methods: {
        ...mapMutations(['selectCity']),

        
        onTabClick (cityInfo){
            this.selectCity(cityInfo)
           console.log('id:',cityInfo.cityId)
        },
        
    }
}
</script>

<style scoped>
    .tab-item {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        height: 100%;
        font-size: .16rem;
        box-sizing: border-box;
        border-bottom: 2px solid #fff;
    }
    .current {
        color: #06c1ae;
        border-color: #06c1ae;
    }
</style>