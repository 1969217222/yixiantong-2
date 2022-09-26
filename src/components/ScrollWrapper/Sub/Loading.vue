<template>
   <div class="loading" v-show="loadingShow">
    <img class="loading-img"  src="../../../assets/images/loading.gif" alt="图片加载中...">
   </div>
</template>

<script>
export default {
    name: 'Loading',
    props:{
        loadingShow:{
            type: Boolean,
            default () {
                return true
            }
        }
    }
}
</script>

<style scoped>
    .loading {
        display: flex;
	    justify-content: center;
	    align-items: center;
        margin-top: 1.5rem;
    }
    .loading-img {
        height: 0.8rem;
        width: 0.8rem;
    }
</style>