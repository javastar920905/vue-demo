<template>
    <section class="container" > <!--最外层容器-->
        <section class="menu"> <!--左边的容器-->
           <menus></menus>
        </section>
        <section class="content-container"><!--右边的容器-->
            <todos></todos>
        </section>
  </section>
</template>
<script>
import menus from './menus'
import todos from './todos'
export default {
    components:{
        menus,
        todos
    },
    computed: {
        menuOpen() {
        return this.$store.state.menuOpen;
        }
    }
    
}
</script>

<style lang="less">
@import '../common/style/layouts.less';
</style>
