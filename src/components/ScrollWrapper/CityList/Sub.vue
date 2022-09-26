<template>
  <div class="city-item">
    <span class="city" @click="onCityClick(cityInfo)">{{cityInfo.cityName}}</span>
  </div>
</template>

<script>
import { mapMutations} from 'vuex'

export default {
    name: 'CityListSub',
    props:{
        cityInfo: Object
    },
    methods : {
        ...mapMutations(['selectCity']),
        onCityClick(cityInfo){
            this.selectCity(cityInfo);
            this.$router.push('/')
            // console.log(cityInfo);
        }
    }
}
</script>

<style scoped>
.city-item {
    display: flex;
    align-items: center;
    height: 0.45rem;
    padding-left: .1rem;
    font-size: .16rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    
}
</style>