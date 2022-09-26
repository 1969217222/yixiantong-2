<template>
  <div class="no-tip">
    <span class="text">-- 没有搜索到相关结果 --</span>
  </div>
</template>

<script>
export default {
  name: 'NoDataTip'
}
</script>

<style scoped>
.no-tip {
  text-align: center;
  margin-top: 1.5rem;
}
.text {
  font-size: .2rem;
  color:#999
}
</style>