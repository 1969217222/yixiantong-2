<template>
<div class="header">
    <city-selector></city-selector>
    <false-input></false-input>
</div>
</template>

<script>
import CitySelector from './Sub/CitySelector.vue';
import FalseInput from './Sub/Falseinpit.vue';

export default {
    name: 'HomeHeader',
    components: {
        CitySelector,
        FalseInput
    }
}
</script>

<style scoped> 
.header {
    display: flex;
    flex-direction: row;
    height: .5rem;
    background-color: #ffc300;
}
</style>