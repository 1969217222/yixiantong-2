<template>
  <div class="backward" @click="onRouteBack">
  <span class="iconfont icon-header-arrow-left"></span>
  </div>
</template>

<script>
export default {
    name: 'BackWard',
    methods: {
        onRouteBack(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
.backward{
    position: absolute;
    left: .1rem;
    display: flex;
    align-items: center;
}
.icon-header-arrow-left{
    font-size: .2rem;
}
</style>