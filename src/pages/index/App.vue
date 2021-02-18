<template>
  <div id="app">
	  首页
	  <a href="cell.html">点击跳转页面</a>
		<div>{{tmpName}}</div>
		<div>{{dateRange}}</div>
 		<ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
    </ul>

	  <hello-world
	  	:arrList="arrList" 
	  	@childClick="childClick"
	  ></hello-world>

	  
  </div>
</template>

<script>
 	import HelloWorld from '@/components/HelloWorld';
 	import { mapGetters, mapActions } from "vuex";
 import EventBus from "@/js/libs/eventbus";
	export default {
	  name: 'app',

	  components:{
	  	HelloWorld,
	  },

	  data() {
      return {
        arrList:[
        	{
        		id:"1",
        		name:"张三"
        	},
        	{
        		id:"2",
        		name:"李四"
        	},
        	{
        		id:"3",
        		name:"赵武"
        	}
        ],
        tmpName:""
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
      // 设置日期
      this.changeDateRange(
	      {
	      	startDate:"2002-01-20",
	      	endDate:"2019-10-25"
	      }
      );
    },
  

    methods: {
    	 // 挂载 Vuex action，用于向中央仓库写入新的 dateRange
      // 设置新的 dateRange 的时候，调用此 action
      ...mapActions([
        "changeDateRange"
      ]),
    	childClick(name){
    		this.tmpName = name
    	}
    }
	}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
