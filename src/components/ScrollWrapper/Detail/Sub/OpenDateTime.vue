<template>
  <div class="datetime-bd">
    <span class="iconfont icon-datetime"></span>
    <span class="datetime-text">{{DateTime}}</span>
  </div>
</template>

<script>
export default {
    name: 'DetailOpenDateTime',
    props:{
        DateTime: {
            type: String,
            default () {
                return '加載中'
            }
        }
    }
}
</script>

<style scoped>
.datetime-bd{
  display: flex;
    align-items: center;
     min-height: .44rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    }
    .icon-datetime {
        margin-left: .1rem;
        vertical-align: middle;
    }
    .datetime-text {
        line-height: .2rem;
        font-size: .16rem;
        color: #000;
        margin-left: .1rem;
    }
</style>