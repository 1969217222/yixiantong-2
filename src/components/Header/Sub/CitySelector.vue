<template>
<div class="city">
    <router-link to="City">
         <span class="city-name">{{this.cityName}}</span>
         <span class="iconfont icon-header-arrow"></span>
    </router-link>
   
</div>
</template>

<script>
 import { mapState } from 'vuex';


 export default {
    name: 'CitySelector',
    props:{
        cityInfo: Object
    },
    computed: {
		...mapState(['cityName']),


	}
 }
</script>

<style scoped>
.city{
    line-height: .5rem;
    font-size: .15rem;
    font-weight: bold;
    margin-left: 0.1rem;
}
.icon-header-arrow {
    font-size: .05rem;
}
</style>