<template>
  <div class="home-title">
    <p>{{title}}</p>
  </div>
</template>

<script>
export default {
    name: 'HomeTitle',
    props:{
      title: {
         type: String,
        default(){
            return '一线生活通'
        }
      }
       
    }
}
</script>

<style scoped>
.home-title{
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 0.13rem .1rem;
  font-size: .18rem;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  margin-top: .1rem;
}
</style>