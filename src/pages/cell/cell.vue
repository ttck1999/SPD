<template>
	<div class="cell-page">
		<div class="cell-page__tops">tops</div>
    <!-- <div>{{dateRange}}</div> -->
		<div>7777{{names}}</div>
		<h3>点击切换</h3>
		<div>
			<router-link :to="{name: 'indices'}" tag="span" >我的收藏</router-link>
			<router-link :to="{name: 'pending'}" tag="span">我的足迹</router-link>
		</div>
		<router-view></router-view>
	</div>
	
</template>
<script>
	import { mapGetters, mapActions } from "vuex";
	 import EventBus from "@/js/libs/eventbus.js";
	export default {
	  name: 'cell',

	  components:{
	  
	  },

	  data() {
      return {
       names:null
      };
    },
    computed: {
      // 挂载 Vuex getter，用于从中央仓库读入当前 dateRagnge
      // 名称一旦定义，不可同名与现有 'props', 'data', 'computed', 'methods' 冲突！
      ...mapGetters([
				"dateRange"
      ])
    },
    mounted() {
				EventBus.$on("changeWinSize", (source)=>{
				 console.log(source)
			 });
      // 设置日期
      this.changeDateRange(
	      {
	      	startDate:"2002-01-20",
	      	endDate:"2019-10-25"
	      }
			);
			
			
		},
		created(){

 		

			  // 解绑bus
      EventBus.$off('handleLotteryShare')
		},
    methods: {
 			// 挂载 Vuex action，用于向中央仓库写入新的 dateRange
      // 设置新的 dateRange 的时候，调用此 action
      ...mapActions([
        "changeDateRange"
      ])
    }
	}
</script>
<style scoped lang="scss">
.cell-page{
	width: 100%;
	height:100%;
	
	&__tops{
		background: blue;
		width: 50px;
		height: 60px;
	}
}
</style>