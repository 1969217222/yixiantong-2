<template>
<div class="current-city">
    <span class="city">当前城市: </span>
    <router-link :to="{name: path}">
    <span class="iconfont icon-positioning"></span>
    <span class="cityName">{{this.cityName}}</span>
    </router-link>
</div>
</template>

<script>
 import { mapState } from 'vuex';

export default {
    name: 'CurrentCity',
    data() {
        return {
            path: 'Index',
            
        }
    },
    computed: {
        ...mapState(['cityName'])
    }
}
</script>

<style scoped>
.current-city{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: .5rem;
    padding-left: .1rem;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    font-size: .16rem;
}
.icon-positioning{
    color:#ffc300;
    vertical-align: .005rem;
    padding-left: .1rem;
}
</style>