<template>
    <div class="error-bd" v-show="errorShow">
        <span class="iconfont icon-error"></span>
        <span class="error-text">网络错误...</span>
    </div>
</template>

<script>
export default {
    name: 'Error',
    props:{
        errorShow:{
            type: Boolean,
            default () {
                return false
            }
        }
    }
}
</script>

<style scoped>
    .error-bd {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 1.8rem;
    }
    .icon-error {
        font-size: .5rem;
        color: #999;
    }
    .error-text {
        color: #999;
        font-size: .25rem;
    }
</style>