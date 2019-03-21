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

    let that=this;
    this.$axios.get(urlprefix+'/taxDeclareList?busiType=unDeclare&skssqq=2018-07-01&skssqz=2018-09-30&pageNum=1&pageSize=10')
    .then(function (response) {
      
      console.log("发送get 请求")
     // console.log(response.data.data);
      //console.log(response.data.data.declares);
      let declares=response.data.data.declares;
     // console.log(declares);
     // console.log(JSON.parse(response.data.data));
      that.declares=declares;
      let declare=that.declares[0];
      that.socialCreditCode=declare.socialCreditCode;
      that.goodsZzsXgmModelVO=declare.goodsZzsXgmModelVO;
      that.serviceZzsXgmModelVO=declare.serviceZzsXgmModelVO;
      //console.log(that.goodsZzsXgmModelVO);
      console.log("发送get 请求完成")

    let ZzsXgmModelVO=[];
    ZzsXgmModelVO.push(declare.goodsZzsXgmModelVO);
    ZzsXgmModelVO.push(declare.serviceZzsXgmModelVO);
      

        that.$axios.post(urlprefix+'/declare/xgm/updateXgmZbOnListPage', ZzsXgmModelVO)
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
