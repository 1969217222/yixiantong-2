<template>
  <div class="icon-item">
    <div class="icon" @click="onRouteTo(field)" :style="{backgroundColor: bgColor}">
    <span class='iconfont' :class='icon'></span>
    </div>
    <p class="icon-text">{{iconText}}</p>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'CategoryIconsSub',

  props: {
    bgColor: String,
    icon: String,
    field: String,  
    iconText:{
      type: String,
      default () {
        return '分类'
      }
    }
  },
  methods: {
    ...mapMutations(['selectField']),
     onRouteTo(field) {
        this.selectField(field)
        this.$router.push('/list')
    }
  }
}
</script>

<style scoped>
	.icon {
		display: flex;
    justify-content: center;
    align-items: center;
		right: .18rem;
		width: .4rem;
		height: .4rem;
		border-radius: 50%;
	}
	.iconfont {
		font-size: .26rem;
		color:#fff;
	}
.icon-text {
		margin-top: .1rem;
		font-size: .18rem;
	}
</style>



<!-- <template>
  <div class="icon-item">
    <div class="icon" @click="onClick(field)" :style="{backgroundColor: bgColor}">
      <span class="iconfont" :class="icon"></span>
    </div>
    <p class="text">{{iconText}}</p>
  </div>
</template>


<script>
  import { mapMutations } from 'vuex';
export default {
  name: 'CategoryIconsSub',
  props:{
    bgColor: String,
    icon: String,
    iconText:{
      type: String,
      default(){
        return '分类'
      }
    }
  },
  methods:{
   ...mapMutations(['selectField']),
   onClick(field) {
        this.selectField(field)
        this.$router.push('/list')
    }
  }
}
</script> -->