<template>
    <div class="intro-bd">
        <detail-title icon="icon-jingdian" title="详细介绍"></detail-title>
        <span class="intro-text">
            <p class="intro">{{intro}}</p>
        </span>
    </div>
</template>

<script>
import DetailTitle from './Title.vue';
export default {
    name: 'DetailIntro',
    components:{
        DetailTitle
    },
    props:{
        intro:{
            type: String,
            default (){
                return '加载中...'
            }
        }
    }
}
</script>

<style scoped>
.intro-bd{
    display: flex;
    flex-direction:column;
     min-height: .44rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
    }
.intro{
    font-size: .16rem;
    text-indent : 2em;
    line-height: .2rem;
    padding: .1rem .1rem;
}
</style>