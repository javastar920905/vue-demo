<template>
    <!--最外层容器-->
    <div class="page lists-sho">
        <!--容器上半部分-->
        <nav>
            <!--移动端的菜单图标-->
            <div class="nav-group">
                <a class="nav-item">
                    <span class="icon-list-unordered">
                   </span>
                </a>
            </div>
            <h1 class="title-page">
                <span class="title-wrapper"></span><!-- 标题-->
                <span  class="count-list"></span><!-- 数目-->
            </h1>
            <!-- 右边的删除，锁定图标容器-->
            <div  class="nav-group right">
                <div class="options-web"> 
                  <a class=" nav-item"> <!-- 锁定图标-->
                    <span class="icon-lock" v-if="todo.locked"></span>
                    <span class="icon-unlock" v-else>
                    </span>
                  </a>
                  <a class=" nav-item"><!-- 删除图标-->
                    <span class="icon-trash">
                    </span>
                  </a>
                </div>
            </div>

            <div class=" form todo-new input-symbol"> <!-- 新增单个代办单项输入框,监听了回车事件，双向绑定text值,监听了disabled属性，在todo.locked为true的情况下无法编辑-->
              <input type="text" v-model="text" placeholder='请输入'@keyup.enter="onAdd" :disabled="todo.locked" />
              <span class="icon-add"></span>
            </div>
        </nav>
        <div class="content-scrollable list-items">
          <!--容器下半部分-->
            <div v-for="item in items">
                <item :item="item"></item>
            </div>
        </div>
    </div>
</template>
<script>
import item from './item'

export default {
 components:{
     item
 },
 data() {
    return {
      todo: { //详情内容
        title: '星期一',
        count: 12,
        locked: false
      },
      items: [ //代办单项列表
        { checked: false, text: '新的一天', isDelete: false },
        { checked: false, text: '新的一天', isDelete: false },
        { checked: false, text: '新的一天', isDelete: false }
      ],
      text: '' //新增代办单项绑定的值
    }
  },
  methods: {
    onAdd() {
      this.items.push({
        checked: false, text: this.text, isDelete: false
      }); // 当用户点击回车时候 ，给items的值新增一个对象，this.text 即输入框绑定的值
      this.text = ''; //初始化输入框的值。
    }
  }

}
</script>
<style lang="less" scoped>
@import '../common/style/nav.less';
@import '../common/style/form.less';
@import '../common/style/todo.less';
</style>
