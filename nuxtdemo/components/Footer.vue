<template>
  <div class="footer">
    <p class="marginTop15">
      <a @click="leaveHuaCloud(0)" style="cursor: pointer">关于华云</a> | 
      <el-tooltip class="item" effect="dark" content="0755-86565121（工作时间：工作日9点至18点）" placement="top">
        <span>联系客服</span>
      </el-tooltip>|
      <a href="/helpCenter" target="_blank">帮助中心</a> |
      <a href="/statement" target="_blank">法律声明与隐私政策</a>
    </p>
    <p class="marginTop10">
      <a @click="leaveHuaCloud(1)" style="cursor: pointer">粤ICP备15086900号-2</a> |
      <a>增值电信业务经营许可证：粤B2-20160676</a> |
      <a>Copyright @1998-2018 深圳市华云中盛科技有限公司</a>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    leaveHuaCloud(b) {
      if (window.confirm('您访问的链接即将离开“企易税”网站，是否继续?')) {
        if (b) {
          window.open('http://www.miitbeian.gov.cn')
        } else {
          window.open('http://ture.hua-cloud.cn/')
        }
      } else {
        return false;
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.footer{
  position absolute;
  bottom :0px;
}
.footer
  a
    color #666
    padding 0 9px
  span
    cursor pointer
    padding 0 9px
.el-footer{
    background-color: #f2f4f7;
    text-align: center;
    color:#666;
    font-size:12px;
}
.marginTop10{
  margin-top:10px;
}
.marginTop15{
  margin-top:15px;
}
</style>
