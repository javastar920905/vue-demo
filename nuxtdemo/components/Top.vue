<template>
  <div class="topNav nav fontSize14 isTopNav" :class="!topNoTitle ? 'bgf' : (role == 8 ? 'bg_b' : '')">
    <div >
      <div class="ar" :class="!topNoTitle ? 'arWrap' : ''" >
        <!-- 头部logo -->
        <div class="roleTitle" :class="!topNoTitle ? 'homeTitle' : ''">
          <router-link to='/index'>
            <img v-if="topNoTitle && role == 6" @click="handleLink" src="https://7easytax-wxmp-1251483553.cos.ap-guangzhou.myqcloud.com/marketImg/logo3.png"/>
            <img v-else-if="topNoTitle && role == 8" @click="handleLink" src="https://7easytax-wxmp-1251483553.cos.ap-guangzhou.myqcloud.com/marketImg/logo5.png"/>
            <img v-else-if="!topNoTitle" @click="handleLink" src="https://7easytax-wxmp-1251483553.cos.ap-guangzhou.myqcloud.com/marketImg/logo3.png"/>
          </router-link>
        </div>

        <!-- 头部右侧菜单选项 -->
        <div class="navRight">
            <div v-if="from == 1"  class='helpcenter'>
              <span class='helpLine'></span>
              <img src="https://7easytax-wxmp-1251483553.cos.ap-guangzhou.myqcloud.com/marketImg/help.png" alt="">
            </div>
            <span v-if="!topNoTitle || role != 6">
              <el-dropdown @command="handleCommand" v-if="disStatus">
                <span class="el-dropdown-link" :class="topNoTitle ? 'dropdown_main' : ''">
                  {{serachName}}<i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item v-for="(item, index) in serach.select" :key="index" :command='item.id' >{{item.name}}</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <span class="search cursor vm" >
              <i>|</i>
              <input :placeholder="placeholder" type="text" class="search_text" :class="topNoTitle ? 'serch_main' : ''" id="search_text" v-model="keyword" v-if="disStatus" @keyup.enter="showSearch()"/>
              <i class="el-icon-search marginLeft1 vm fontSize20" @click="showSearch()"></i></span>
            </span>
            <!-- <span class='home displayIn marginLeft20 cursor' @click="selectNav('1')">企易税首页</span> -->
            <span class='home displayIn marginLeft20 cursor' ><a href="http://localhost:8081/index" target="_blank">企易税首页</a></span>
            <span class='cart displayIn cursor' :class="{active_black:index == '3' && !topNoTitle}"  @click="selectNav('3')" v-if="role == 8 || !role">
              <img v-if="!topNoTitle && index == 3" src='https://7easytax-wxmp-1251483553.cos.ap-guangzhou.myqcloud.com/marketImg/cart_b.png'>
              <img v-else-if="!topNoTitle && index != 3" src='https://7easytax-wxmp-1251483553.cos.ap-guangzhou.myqcloud.com/marketImg/cart_g.png'>
              <img v-else src='https://7easytax-wxmp-1251483553.cos.ap-guangzhou.myqcloud.com/marketImg/cart_f.png'>
              购物车          
            </span>
            <el-dropdown @command="dropdownMenu" class="favorite cursor" :class="{active_blue:index == '2'}">
              <span class="el-dropdown-link" @click="selectNav('2')">
                <i class="el-icon-erp-renwu"></i>
                个人中心<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown" :class="!topNoTitle ? 'topDropdownMenu_f' : role == 8 ? 'topDropdownMenu' : 'topDropdownMenu_f'">
                
                <el-dropdown-item command="b" v-if="role == 8 || !role">我的需求</el-dropdown-item>
                <el-dropdown-item command="b" v-else>待处理需求</el-dropdown-item>
                <el-dropdown-item command="c" v-if="role == 8 || !role">我的订单</el-dropdown-item>
                <el-dropdown-item command="c" v-else>订单管理</el-dropdown-item>
                <el-dropdown-item command="a" v-if="role == 8 || !role">收藏夹</el-dropdown-item>
                <el-dropdown-item command="a" v-else>我的钱包</el-dropdown-item>
                <el-dropdown-item command="d" v-if="role == 6">收藏夹</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span class="displayIn cursor login" v-if="isShowNewsBtn">
              <div class="isNews" @click="showNewsFn">
                <!-- <img v-if="!topNoTitle && index == 4 && role == 8" src='https://7easytax-wxmp-1251483553.cos.ap-guangzhou.myqcloud.com/marketImg/news_b.png'> -->
                <img v-if="!topNoTitle || role == 6 " src='https://7easytax-wxmp-1251483553.cos.ap-guangzhou.myqcloud.com/marketImg/news.png'>
                <img v-else src='https://7easytax-wxmp-1251483553.cos.ap-guangzhou.myqcloud.com/marketImg/news_w.png'>
                <span>
                  消息
                  <i v-if="news !== 0 && news < 100">{{news}}</i>
                  <i v-if="news !== 0 && news >= 100">99</i>
                </span>
              </div>
              <div class="newsContentBox" v-show="showNews">
                <div>
                  <div class="newsHead">
                    <span>消息列表</span>
                    <span @click="hiddeNews">x</span>
                  </div>
                  <div class="newsContent">
                    <div class="navTitle">
                      <span :class="{active: newsSelected === 1}" @click="selectType(1)">重要</span>
                      <span :class="{active: newsSelected === 0}" @click="selectType(0)">一般</span>                
                    </div>
                    <div class="newsList" v-if="listData.length">
                      <ul>
                        <li v-for="(item, index) in listData" :class="{noTopB: index === listData.length-1}" @click="gotoNewsDetail(item)">
                          <div><i class="blueBall"></i><span>{{item.mTypeName}}</span></div>
                          <div class="newContent">{{item.content}}</div>
                        </li>
                      </ul>
                    </div>
                    <div class="emptyList" v-else>
                      暂无未读消息
                    </div>
                  </div>
                  <div class="newsFoot" @click="gotoNewsCenter">
                    进入消息中心>>
                  </div>
                </div>
              </div>
            </span>
            <span class="displayIn cursor login" v-if="!userName" @click="loginButton">登录</span>
            <el-dropdown @command="dropdownMenu2" class="people cursor" v-if='userName' :class="{active_border:index == '2'}">
              <span class="el-dropdown-link" @click="selectNav('2')">
                {{userName}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown" :class="!topNoTitle ? 'topDropdownMenu_f' : role == 8 ? 'topDropdownMenu' : 'topDropdownMenu_f'">
                <el-dropdown-item command="a">账户设置</el-dropdown-item>
                <el-dropdown-item command="b">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>

    </div>

    <!-- 同意协议 -->
    <div  class="isStatementDialog" v-if="statementDialog">
      <div>
          <div v-html="quillData"></div>
          <span>以上协议将于2018年10月12日生效，如果您在2018年10月12日之后继续使用我们的服务，即表示您同意以上协议。如果您决定不接受以上协议，您应立即停止开店操作。</span>
          <button @click="confirmState">已阅读并同意</button>
      </div>
    </div>
  </div>
</template>
<script>
import INTERFACE from '../interface.js';
export default {
  data() {
    return {
      disStatus: false,
      content: '',
      index: '',
      keyword: '',
      userName: '',
      visible2: false,
      serachName: '',
      serach: {
        selectID: 1,
        select: [
          {'id': 1, 'name': '产品', placeholder: '请输入产品名称'},
          {'id': 2, 'name': '服务商', placeholder: '请输入服务商名称'}
        ]
      },
      placeholder: '请输入产品名称', // 或者 请输入服务商名称
      role: '',
      news: 0,
      showNews: false,
      isShowNewsBtn: false,
      listData: [],
      newsSelected: 1,
      websock: null,
      quillData: '',
      statementDialog: false,
      newsFilter: {
        'readed': 0,
        'priority': 1,
        'pageSize': 30,
      },
      from: ''
    }
  },
  props: ['topNoTitle'],
  asyncData (context,req) {
    this.getUser(req);
    console.log("load user info ..........................................")
    //return { project: 'nuxt' }
  },
  created: function() {
    // console.log(222, 3333)
    this.from = this.$route.query.from
    this.keyword = this.$route.query.keyword ? this.$route.query.keyword : ''
    // if (this.$route.query.selectID) {
    //   this.serach.selectID = this.$route.query.selectID
    //   for (let i = 0; i < this.serach.select.length; i++) {
    //     if (parseInt(this.$route.query.selectID) === this.serach.select[i].id) {
    //       this.serachName = this.serach.select[i].name
    //     }
    //   }
    // } else {
    //   this.serach.selectID = 1
    //   this.serachName = '产品'
    // }
     //this.getUser(req);
  },
  mounted() {
    this.role = window.localStorage['role'];
    // console.log(this.role, 'role')
    this.index = window.localStorage['index']
    if (this.$route.path === '/index') {
      this.disStatus = true
    } else {
      this.disStatus = false
    }
  },
  methods: {
    handleLink () {
      if (this.$route.path !== '/index') {
        this.$router.push('/index');
      }
    },
    selectType(n) {
      this.newsFilter.priority = n;
      this.newsSelected = n;
      INTERFACE.getNotifyList(this.newsFilter).then(e => {
        if (e.code === 200 && e.data) {
          this.listData = e.data.list;
        } else {
          this.listData = [];
        }
      })
    },
    gotoNewsDetail(val) {
      INTERFACE.setRead(val.id).then(e => {
        if (e.code === 200) {
          this.gotoWhere(val)
        } else {
          this.$notify({
            message: '标记已读失败，请稍后再试',
            type: 'warning'
          });
        }
      })
    },
    gotoWhere(val) {
      window.localStorage.setItem('index', 0);
      switch (val.mType) {
        case 1010:
        case 1020:
        case 1040:
          // 订单详情（机构）
          this.openNew('/orderDetail', {orderId: val.ywid})
          break;
        case 1030:
          // 评价详情 （机构）
          this.openNew('/viewComment', {orderId: val.ywid})
          break;
        case 2030:
        case 2040:
        case 2050:
          // 需求详情 （机构）
          this.openNew('/acceptedDetail', {id: 0, demandStoreId: val.ywid})
          break;
        case 2010:
        case 2020:
          let that = this;
          let id = val.id;
          INTERFACE.getDemandStatus(val.ywid).then(e => {
            if (e.code === 0) {
              switch (e.data) {
                case 0:
                  that.openNew('/pendingDetail', {id: 0, demandStoreId: val.ywid})
                  break;
                case 1:
                  that.openNew('/acceptedDetail', {id: 0, demandStoreId: val.ywid})
                  break;
                default:
                  that.$confirm('当前交易已中止，无法查看详情。是否删除消息', '消息已失效', {
                    confirmButtonText: '删除',
                    cancelButtonText: '取消',
                    type: 'warning'
                  }).then(() => {
                    INTERFACE.deleteNotify(id).then(e => {
                      if (e.code === 200) {
                        INTERFACE.getNotifyList(that.newsFilter).then(e => {
                          if (e.code === 200 && e.data) {
                            that.listData = e.data.list;
                          } else {
                            that.listData = [];
                          }
                        })
                      }
                      if (e.code !== 200) {
                        that.$notify({
                          message: '删除失败，请稍后再试',
                          type: 'warning'
                        });
                      }
                    })
                  }).catch(() => {});
                  break;
              }
            }
          })
          break;
        case 3010:
        case 3020:
        case 3030:
        case 3040:
          // 订单/需求的申诉详情 （机构）
          if (val.mPage === 0) {
            // 需求
            this.openNew('/needPlazaComplainDetail', {id: val.ywid});
          } else {
            // 订单
            this.openNew('/orderComplainDetail', {id: val.ywid});
          }
          break;
        case 5010:
        case 5020:
          // 订单详情 （买家）
          this.openNew('/myOrderDetail', {orderId: val.ywid});
          break;
        case 6010:
        case 6020:
          // 需求详情 （买家）
          this.openNew('/needDetail', {id: val.ywid});
          break;
        case 7010:
        case 7020:
        case 7030:
          // 订单/需求的申诉详情 （买家）
          if (val.mPage === 0) {
            // 需求
            this.openNew('/myNeedComplainDetail', {id: val.ywid});
          } else {
            // 订单
            this.openNew('/myOrderComplainDetail', {id: val.ywid});
          }
          break;
        case 8010:
        case 8020:
        case 8030:
          // 付款页面 (买家)
          // 付款页面 (买家)
          if (val.mPage === 0) {
            // 需求
            this.openNew('/needDetail', {id: val.ywid});
          } else {
            // 订单
            this.openNew('/myOrderDetail', {id: val.ywid});
          }
          break;
        case 9010:
          if (val.mPage === 0) {
            // 需求
            this.$router.push({path: '/needPlazaComplainDetail', query: {id: val.ywid}});
          } else {
            // 订单
            this.$router.push({path: '/orderComplainDetail', query: {id: val.ywid}});
          }
          break;
      }
    },
    openNew(url, data) {
      const pa = this.$router.resolve({
        path: url,
        query: data
      })
      window.open(pa.href, '_blank');
    },
    gotoNewsCenter() {
      window.localStorage.setItem('index', 0)
      this.$router.push({path: '/NewsList'})
    },
    showNewsFn() {
      this.showNews = !this.showNews;
      if (this.showNews) {
        INTERFACE.getNotifyList(this.newsFilter).then(e => {
          if (e.code === 200 && e.data) {
            this.listData = e.data.list;
          } else {
            this.listData = [];
          }
        })
      }
    },
    hiddeNews() {
      this.showNews = false;
    },
    dropdownMenu(val) {
      if (!this._tokenSet.getToken()) {
        this.$router.push({path: '/login'})
      } else {
        if (!this.topNoTitle) {
          window.localStorage.setItem('index', 2)
        }
        if (val === 'a') {
          if (this.role === '8' || this.role === '') {
            this.$router.push({path: '/enshrine'})
          } else {
            this.$router.push({path: '/wallet'})
          }
        } else if (val === 'b') {
          if (this.role === '8' || this.role === '') {
            this.$router.push({path: '/myNeed'})
          } else {
            this.$router.push({path: '/needPlaza'})
          }
        } else if (val === 'c') {
          if (this.role === '8' || this.role === '') {
            this.$router.push({path: '/myOrder'})
          } else {
            this.$router.push({path: '/orderControl'})
          }
        } else if (val === 'd') {
          this.$router.push({path: '/collectInfo'})
        }
      }
    },
    handleCommand (command) {
      for (let i = 0; i < this.serach.select.length; i++) {
        if (command === this.serach.select[i].id) {
          this.serachName = this.serach.select[i].name
          this.serach.selectID = this.serach.select[i].id
          this.placeholder = this.serach.select[i].placeholder
        }
      }
    },
    getUser(req) {
      let that = this;
      let token = this._tokenSet.getToken(req);
      console.log(token);
      let n = 0;
      if (token) {
        let role = localStorage.getItem('role');
        this.userName = localStorage.getItem('name');
        if (role === 6) {
          this.wetherState();
        }
        n = 1;
        this.isShowNewsBtn = true;
        if (!this.WebSocket) {
          this.initWebSocket();
          setInterval(e => {
            that.WebSocket.send('zzz~')
          }, 40000)
        }
        this.WebSocket.onmessage = null;
        this.WebSocket.onclose = null;
        this.WebSocket.onmessage = this.websocketonmessage;
        this.WebSocket.onclose = this.websocketclose;
        INTERFACE.getUnRead(1).then(e => {
          if (e.code === 200) {
            this.news = e.data ? parseInt(e.data) : 0;
          }
        })
      } else {
        this.isShowNewsBtn = false;
        window.localStorage.removeItem('name');
        window.localStorage.removeItem('photo');
        window.localStorage.removeItem('role');
      }
      this.$emit('userStateChange', n);
    },
    confirmState() {
      INTERFACE.confirmState().then(e => {
        if (e.code === 0) {
          this.statementDialog = false;
        }
      })
    },
    wetherState() {
      INTERFACE.wetherState().then(e => {
        if (e.code === 0) {
          if (!e.data) {
            this.getStatement();
          }
        }
      })
    },
    getStatement() {
      INTERFACE.getStatement().then(e => {
        if (e.code === 0) {
          this.quillData = e.data.content;
          this.statementDialog = true;
        }
      })
    },
    websocketonmessage(e) {
      let r = JSON.parse(e.data);
      if (r.qrCodeScaned) {
        this.$emit('getwebsocket', r)
      } else {
        this.news = r.unReadCount ? parseInt(r.unReadCount) : 0;
      }
    },
    websocketclose(e) {
      console.log('websocket closed');
    },
    showSearch: function() {
      if (!this.disStatus) {
        this.disStatus = true;
      } else {
        this.index = '1';
        window.localStorage['index'] = this.index
        this.disStatus = false;
        this.$router.push({path: '/search?selectID=' + this.serach.selectID + '&keyword=' + this.keyword})
      }
    },
    selectNav: function(num) {
      this.index = num;
      window.localStorage['index'] = this.index
      if (num === '2') {
        if (window.localStorage['dataRole']) {
          this.$router.push({path: window.localStorage['dataRole']})
        } else {
          this.$router.push({path: '/login'})
        }
      } else if (num === '3') {
        if (this.userName) {
          this.$router.push({path: '/ShoppingCart'});
        } else {
          this.$router.push({path: '/login'});
        }
      } else {
        this.$router.push({path: '/index'});
      }
    },
    loginOut () {
      this._tokenSet.deleteToken();
      window.localStorage['name'] = '';
      window.localStorage['index'] = 1;
      window.localStorage['dataRole'] = '';
      window.localStorage['serachId'] = 1;
      window.localStorage['serachName'] = '';
      window.localStorage['serachShow'] = '';
      window.localStorage['role'] = '';
      window.localStorage['photo'] = '';
      localStorage.removeItem('isRealName')
      this.userName = '';
      this.isShowNewsBtn = false;
      this.showNews = false;
      this.$emit('localStorageChange', {'name': window.localStorage['name'], 'role': window.localStorage['role'], 'photo': window.localStorage['photo']})
      this.$router.push({path: '/index'})
    },
    account () {
      if (!this.topNoTitle) {
        window.localStorage.setItem('index', 2)
      }
      this.$router.push({path: '/account'})
    },
    loginButton () {
      this.$router.push({path: '/login'})
    },
    // 点击用户名下拉菜单回调
    dropdownMenu2(val) {
      if (val === 'a') {
        this.account()
      } else if (val === 'b') {
        this.loginOut()
      }
    },
    getWs() {
      const currentProtocol = window.location.protocol;
      let result = '';
      if (currentProtocol === 'http:') {
        if ('WebSocket' in window) {
          result = 'ws://';
        } else {
          result = 'http://';
        }
      } else {
        if ('WebSocket' in window) {
          result = 'wss://';
        } else {
          result = 'https://';
        }
      }
      return result;
    }
  },
  watch: {
    '$route' (to, from) {
      this.serach.selectID = parseInt(to.query.selectID)
      for (let i = 0; i < this.serach.select.length; i++) {
        if (this.serach.selectID === this.serach.select[i].id) {
          this.serachName = this.serach.select[i].name
        }
      }
      this.keyword = to.query.keyword
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .topNav{
    position:absolute;
    top:0;
  }
  .navRight{
    height:81px;
    // position:absolute;
    // right:0;
    float:right;
    width:500px;
  }
  .roleTitle
    img 
      box-sizing: unset
  .navRight 
    span,div
      float left;
      line-height 81px
  .isTopNav
    .isStatementDialog
      position fixed
      width 100%
      height 100%
      background-color rgba(0,0,0,0.5)
      z-index 3000
      top 0
      left 0
      font-size 14px
      >div
        position absolute
        width 800px
        height 574px
        top 50%
        left 50%
        margin-left -400px
        margin-top -287px
        background-color #fff
        >div
          margin-top 30px
          height 400px
          overflow auto
        >span
          display inline-block
          line-height 20px
          margin 0 32px
          color #666
          font-weight bold
        >button
          width 104px
          height 32px
          background-color #4680ff
          color #fff
          border-radius 4px
          border none
          display block
          margin 0 auto
  .topDropdownMenu
    background-color #4680ff
    border 1px solid #4680ff
    .popper__arrow
      display none
    li
      color #fff
      width 70px
  .topDropdownMenu_f
    background-color #fff
    border 1px solid #fff
    .popper__arrow
      display none
    li
      color #333
      width 70px
  .nav.bgf
    background-color #fff
    background-image none
    color #333
    // position relative
    box-shadow 1px 1px 4px rgba(0,0,0,0.05)
    height 81px
    z-index 1999
  .nav.bg_b
    background-image: url('https://7easytax-wxmp-1251483553.cos.ap-guangzhou.myqcloud.com/marketImg/Circle.png');
    color #fff
    .favorite
      color #fff
    .people
      color #fff
  .nav
    width:100%;
    line-height:80px;
    background-color #fff
    box-shadow: 1px 1px 4px #D1D4D9;
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    color #333
    .helpcenter
      display inline-block
      float left 
      margin-left 126px
      .helpLine
        display inline-block
        width 1px
        height 45px
        background-color #4680ff
        vertical-align: middle;
      img
        vertical-align: middle;
        margin-left 20px
    .el-icon-search:hover
      color #333
    .cart
      img
        width 19px
        height 17px
        position relative
        top 2px
        margin-right 3px
    .people
      max-width: 310px;
      text-align: center;
      height: 30px;
      line-height: 30px;
      background-image none
      font-size 14px    
    .favorite,.people
      color #333
      height 30px!important
      font-size 14px
      .el-dropdown-link
        display inline-block
        height 100%
        width 100%
        border none!important
        >.el-icon-erp-renwu
          font-weight bold
    .roleTitle.homeTitle
      color #4680ff
    .roleTitle
      text-align center
      display inline-block
      float left
      height 50px
      line-height 50px
      padding 15px 0
      position relative
      img
        display block
        width 110px
        height 44px
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        margin auto
    .search_text
      width:197px;
      height:28px;
      line-height: 28px;
      background-color: rgba(255,255,255,.8);
      margin-left:8px;
      margin-right: -32px;
      border-color: transparent;
      border: 1px solid #fff;
      color:#333;
      padding: 0 30px 0 8px;
    .serch_main
      color #fff
      background-color rgba(255,255,255,0)
    .serch_main:-moz-placeholder
      color #fff
    .serch_main::-moz-placeholder
      color #fff
    .serch_main:-ms-input-placeholder
      color #fff
    .serch_main::-webkit-input-placeholder
      color #fff
    .dropdown_main
      color #fff

    .cursor {
      cursor: pointer;
    }

    .ar{
      text-align:right;
      margin-right 118px
      margin-left 90px
    }
    .ar.arWrap
      width 1270px
      margin 0 auto
    .ar .el-dropdown {
      height: 45px;
    }
    .vt{
      vertical-align: top;
    }
    .vm{
      vertical-align: middle;
    }
    .fontSize14{
      font-size: 14px
    }
    .marginLeft20{
      margin-left:20px;
    }
    .marginRight5{
      margin-right:5px;
    }
    .displayIn{
      display:inline-block;
    }
    .home,.userName,.cart,.favorite,.login{
      width: 110px;
      text-align: center;
      height: 30px;
      line-height: 81px;
      background-image none
      font-size 14px      
    }
    .home{
      width 86px
      margin-right  12px
    }
    .favorite{
      margin-left 12px
    }
    .login
      .newsImg
        vertical-align middle
      >.newsContentBox
        position fixed
        top 88px
        right 0
        width 325px
        height calc(100% - 88px)
        z-index 2002
        background-color #fff
        box-shadow 0 0 14px rgba(0,0,0,0.05)
        color #333
        >div
          width 317px
          margin 0 4px
          height 100%
          >.newsHead
            height 48px
            border-bottom 1px solid #e8e8e8
            >span
              display inline-block
              line-height 48px
              font-size 16px
              font-weight bold
            >span:nth-child(1)
              float left 
              margin-left 8px
            >span:nth-child(2)
              float right 
              width 50px
              margin-right 8px
          >.newsFoot
            height 48px
            font-size 14px
            line-height 48px
            color #4680ff
            border-top 1px solid #e8e8e8
          >.newsContent
            position relative
            height calc(100% - 106px)
            >.emptyList
              text-align center
              height 50px
              line-height 50px
              position absolute
              top 50%
              margin-top -25px
              width 100%
            >.navTitle
              padding 8px 0
              width 135px
              border-bottom 1px  solid #e8e8e8
              >.active
                color #4680ff
              >span
                display inline-block
                height 32px
                width 56px
              >span:nth-child(2)
                border-left 1px  solid #e8e8e8
                margin-left 8px
            >.newsList
                height calc(100% - 47px)
                overflow auto
                >ul
                  >.noTopB
                    border none
                  >li
                    padding-top: 8px;
                    padding-left: 8px;
                    border-bottom: 1px solid #e8e8e8;
                    >div
                      text-align left
                      position relative
                      >span
                        margin-left 16px;
                      >.blueBall
                        width 10px
                        height 10px
                        display inline-block
                        border-radius 50%
                        background-color #4680ff
                        position absolute
                        top 10px
                        left 0px
                    .newContent
                      color #999
                      line-height 20px
                      font-size 12px
      >span 
        position relative
        font-size 14px
        >i
          position absolute
          width 25px
          height 20px
          border-radius 10px
          font-size 12px
          color #fff
          top -10px
          line-height 20px
          background-color #f56c6c
      .isNews
        >span 
          position relative
          font-size 14px
          >i
            position absolute
            width 25px
            height 20px
            border-radius 10px
            font-size 12px
            color #fff
            top -10px
            line-height 20px
            background-color #f56c6c
    .active_border
      border none
      color #333
    .active_black
      border-bottom: 2px solid #4680ff;
      color #4680ff
    .active_blue{
      color #333
    }
    .userName{
      padding-right:100px;
    }
    .userName:hover{
      color:#fff;
    }
    span.search:hover{
      font-weight:bold;
      /*visibility: visible;*/
    }
    .marginRight60{
      margin-right:60px;
    }
    .marginLeft12
      margin-left 12px
</style>
