<template>
    <!--菜单容器-->
    <div class="list-todos">
         <!--单个菜单容器-->
        <a @click="goList(item.id)" class="list-todo activeListClass list" :class="{'active': item.id === todoId}" v-for="item in items">
          <span class="icon-lock" v-if="item.locked"></span>  <!--锁的图标-->
          <span class="count-list">{{item.count}}</span><!--数字-->
          {{item.title}}<!--菜单内容-->
        </a>

        <!--新增菜单-->
        <a class="link-list-new" @click="addTodoList">  
            <span class="icon-plus"></span>新增
        </a>

    </div>
</template>
<script>
import {getTodoList,addTodo} from '../api/api'

export default {
  data(){
    return{
      items:[],// 菜单数据
      todoId:''//默认选中id
    }
  },
  created(){
    // 调用请求菜单列表数据的接口
    getTodoList({}).then(res=>{
      const TODOS=res.data.todos; // 数据都会返回在res.data里面。
      this.items=TODOS;
      this.todoId=TODOS[0].id;
    })
  },
  methods:{
    goList(id){
      this.todoId=id;// 点击菜单时候,替换选中id
    },
    addTodoList(){// 点击新增按钮时候
      // 调用新增菜单的接口，在接口调用成功在请求数据
      addTodo({}).then(data => {
        getTodoList({}).then(res => {
          const TODOS = res.data.todos;
          this.todoId = TODOS[TODOS.length - 1].id;
          this.items = TODOS;
        });
      });
    }
  },
  watch:{

    'todoId'(id){
      this.$router.push({name:'todo',parms:{id:id}})
      //监听到用户的点击todoId的变化在跳转路由
    }
  }
}
</script>

<style lang="less">
@import '../common/style/menu.less';
</style>
