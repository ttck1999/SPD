<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div v-for="(item,index) in arrList" :key="index">
      <span>{{item.id}}</span>
       <span>{{item.name}}</span>
    </div>
    <div>{{dateRange}}</div>
    <a href="javascript:;" @click="parentData"> 点击按钮给父组件传值</a>

    <h2>Essential Links</h2>
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
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  import Axios from "axios"
  import EventBus from "@/js/libs/eventbus";
  export default {

    name: 'HelloWorld',

    props: {
      arrList: {
        type:Array,
        default() {
          return [];
        }
      }
    },

    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        parentName:"传给父组件的值"
      }
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
    
    methods:{
      // 挂载 Vuex action，用于向中央仓库写入新的 dateRange
      // 设置新的 dateRange 的时候，调用此 action
      ...mapActions([
        "changeDateRange"
      ]),
      parentData(){
        this.$emit("childClick",this.parentName)
        EventBus.$emit("changeWinSize", {
          source: "diagram"
        });
      window.open("cell.html",'_top')
        Axios.get('/user', {
          params: {
            ID: 12345
          }
        }).then((res) => {

        }, () => {

        })
        
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
