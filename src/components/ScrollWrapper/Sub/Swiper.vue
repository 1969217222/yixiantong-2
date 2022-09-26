<template>
    <!-- <div class="swiper-wrap">
        <swiper :options="swiperOption">
            <swiper-slide
            v-for="(item, index) of picDatas" 
            :pic="item"
            :key="index"
            >
            <img class="swiper-img" :src="item" />
            <div class="swiper-pagination" slot="pagination"></div>
            </swiper-slide>
        </swiper>
    </div> -->
    <div class="swiper-wrap">
		<swiper :options="swiperOption">
			<swiper-slide
			  v-for="(item, index) in pic"
			  :pic="item"
			  :key="index"
			>
			  <img class="swiper-img" :src="item" />
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
    import { swiper ,swiperSlide } from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'

    export default {
        name: 'DetailSwiper',
        components:{
            swiper, swiperSlide
        },
        props: {
            pic: Array
        },
        data(){
            return{
                swiperOption: {
                pagination:{
                    el: '.swiper-pagination'
                }
                }
            }
            
        }
        
    }
</script>

<style scoped>
  	.swiper-slide {
		height: 2rem;
	}

	.swiper-img {
		width: 100%;
		height: 100%;
	}
</style>