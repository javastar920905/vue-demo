<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <HelloWorld/> -->
    <h3>企业名称: {{mandatorName}}</h3>
    <p>信用代码: {{socialCreditCode}}</p>
    <p>未申报信息: </p>
    <textarea v-model="declares" name="" id="" cols="30" rows="10">
    
    </textarea>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  data:function(){
    return{
        declares:[],
        goodsZzsXgmModelVO:{},
        serviceZzsXgmModelVO:{},
        mandatorName:'',
        socialCreditCode:'',
        
    }
  },
  components: {
    HelloWorld
  },
  mounted(){
    //浏览器访问ok,axios 提示跨域 http://localhost:7124/declare/xgm/declare/taxDeclareList?busiType=unDeclare&skssqq=2018-07-01&skssqz=2018-09-30&pageNum=1&pageSize=10 
    //proxy table 没成功-404 api/declare/xgm/declare/taxDeclareList?busiType=unDeclare&skssqq=2018-07-01&skssqz=2018-09-30&pageNum=1&pageSize=10
    // nginx 配置允许跨域'http://localhost/tax-declare/xgm/declare/taxDeclareList?busiType=unDeclare&skssqq=2018-07-01&skssqz=2018-09-30&pageNum=1&pageSize=10'
    
    let urlprefix='http://localhost/tax-declare/xgm/declare';
    // let urlprefix='http://dev.7easytax.com/tax-declare/xgm/declare';

    let that=this;
     console.log("发送get 请求")
    this.$axios.get(urlprefix+'/taxDeclareList?busiType=unDeclare&skssqq=2018-07-01&skssqz=2018-09-30&pageNum=1&pageSize=10')
    .then(function (response) {
     // console.log(response.data.data);
      //console.log(response.data.data.declares);
      let declares=response.data.data.declares;
     // console.log(declares);
     // console.log(JSON.parse(response.data.data));
      that.declares=declares;
      let declare=that.declares[0];
      that.socialCreditCode=declare.socialCreditCode;
      that.goodsZzsXgmModelVO=declare.goodsZzsXgmModelVO;
      that.goodsZzsXgmModelVO.socialCreditCode=that.socialCreditCode;
      that.serviceZzsXgmModelVO=declare.serviceZzsXgmModelVO;
      that.serviceZzsXgmModelVO.socialCreditCode=that.socialCreditCode;
      //console.log(that.goodsZzsXgmModelVO);
      console.log("发送get 请求完成")

        let updateZbUrl=urlprefix+'/declare/xgm/updateXgmZbOnListPage';//修改主表记录url
        let zeroDeclareUrl=urlprefix+'/lxlsb/xgm/yjlsb';//零申报url

        //构建主表数据
        let ZzsXgmModelVO=[];
        ZzsXgmModelVO.push(declare.goodsZzsXgmModelVO);
        ZzsXgmModelVO.push(declare.serviceZzsXgmModelVO);
         console.log("构建主表数据")
        console.log(ZzsXgmModelVO)
        
        //构建零申报数据
        let zeroDeclareVO=[];
        declare.yjlsbVo.socialCreditCode=that.socialCreditCode;
        zeroDeclareVO.push(declare.yjlsbVo);
        console.log("构建零申报数据")
        console.log(declare.yjlsbVo)

        //发送post请求
        console.log("发送post请求")
        that.$axios.post(zeroDeclareUrl, zeroDeclareVO)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          })
    .catch(function (error) {
      console.log(error);
    });

   
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
