<template>
  <div class="com-app">
   <com-header></com-header> 
     <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition> 
    <!-- <com-addMsg></com-addMsg> -->
    <com-footer v-show="isFooter"></com-footer> 
    <com-loading v-show="loading"></com-loading>
  </div>
</template>
<script>

   import Header from './components/header'
   import Footer from './components/footer'
   import Index from './page/index'
   import loading from './components/loading.vue'
   import addMsg from './page/addMsg.vue'

  export default{
    data: function () {
      return {
        transitionName: 'slide-left'
      }
    },
    created: function () {
      if (this.$route.name === undefined) {
        //立即调整到 热门话题
        this.$router.push('/index/hot')
      }
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    },
    computed: {
      isFooter: function () {
        return this.$store.state.comm.indexConf.isFooter
      },
      loading: function () {
        return this.$store.state.comm.loading
      }
    },
    components: {
      comHeader: Header,
       comFooter: Footer,
       comIndex: Index,
       comLoading: loading,
       comAddMsg:addMsg
    },
    methods: {}
  }
</script>
<style lang="scss">
  @import "../static/css/app.scss";
</style>