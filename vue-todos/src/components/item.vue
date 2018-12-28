<template>
     <!-- 最外层容器-->
    <div class="list-item editingClass editing">
        <label class="checkbox"> <!--自定义的多选框-->
          <input type="checkbox" v-model="item.checked"> <!--item.checked-->
          <span class="checkbox-custom"></span>
        </label>
        <!--绑定item.text-->
        <input type="text" v-model="item.text" placeholder="写点什么...">
        <a class="delete-item"> <!--删除图标-->
          <span class="icon-trash"></span>
        </a>
    </div>
</template>
<script>
export default {
     props: ['item']  //子组件显式的用 props 选项声明它期待获得的数据，
    //这里申明 它想要一个叫做 ’item‘的数据。
}
</script>
<style lang="less" scoped>
@import '../common/style/list-items.less';
</style>
