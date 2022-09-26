<template>
   <div class="msj-list">
      <massage-list-sub
       v-for="(item, index) in massageDatas"
       :data="item"
       :key="index"
      ></massage-list-sub>
   </div>
</template>

<script>
import MassageListSub from './Sub.vue'

export default {
    name: 'MassageList',
    components: {
        MassageListSub
    },
    props: {
        massageDatas: Array
    }
}
</script>

<style>

</style>