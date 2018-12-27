<template>
    <section class="container" > <!--最外层容器-->
        <section class="menu"> <!--左边的容器-->
            <todo></todo>
        </section>
        <section class="content-container"><!--右边的容器-->
        </section>
  </section>
</template>
<script>
//导入刚才创建的 menus组件
import menus from './menus'
import todo  from './todos'

export default {
    components:{// * 注册menus组件，让其可以在template调用
        menus,
        todo
    }
}
</script>
<style lang="less">
@import '../common/style/layouts.less';
</style>
