<template>
<div class="icons-wrapper">
    <category-icons-sub
    v-for="item of fieldDatas"
    :bgColor="item.bgColor"
    :icon="item.icon"
    :field="item.field"
    :iconText="item.iconText"
    :key="item.id"
></category-icons-sub>
</div>
</template>

<script>
import CategoryIconsSub from './Sub.vue'
import fieldDatas from '../../../assets/data/fields';

export default {
    name: 'CategoryIcons',
    components: {
        CategoryIconsSub
    },
    data() {
        return {
          fieldDatas: fieldDatas  
        }
    }
}
</script>

<style scoped>
.icons-wrapper {
    display: flex;
    justify-content:  space-between;
    padding: 0.15rem .15rem;
      background-color: #fff;
      border-bottom: 1px solid #ddd;
}
</style>