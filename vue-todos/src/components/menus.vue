<template>
    <!--菜单容器-->
    <div class="list-todos">
         <!--单个菜单容器-->
        <a class="list-todo activeListClass list" v-for="item in items">
          <span class="icon-lock" v-if="item.locked"></span>  <!--锁的图标-->
          <span class="count-list">{{item.count}}</span><!--数字-->
          {{item.title}}<!--菜单内容-->
        </a>

        <!--新增菜单-->
        <a class="link-list-new">  
            <span class="icon-plus"></span>新增
        </a>

    </div>
</template>
<script>
export default {
  data(){
    return{
      items:[
        {title:'星期一',count:1,locked:true},
        {title:'星期二',count:1,locked:true},
        {title:'星期三',count:1,locked:false},
      ]
    }
  }
}
</script>

<style lang="less">
@import '../common/style/menu.less';
</style>
