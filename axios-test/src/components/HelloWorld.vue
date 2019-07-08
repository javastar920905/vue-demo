<template>
  <div id="app" class="m-5">
        <div class="uploadBox">
            <h3>上传文件</h3>
            <div class="fileBox">
                <input type="file" id="myFile" class="inputfile" @change="handlerUpload($event)">
                <label for="myFile">
                    <i class="iconfont">&#xe632;</i>点击上传本地文件
                </label>
            </div>
            <div class="fileInfo">
                <ul class="files">
                    <li  v-for="(file, index) in files" v-bind:key="file">
                        {{ file.name }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
   methods:{
            handlerUpload(e){
              let param = new FormData();
              param.append("name", "wiiiiiinney");
              //通过append向form对象添加数据
              param.append("file", e.target.files[0]);
              //FormData私有类对象，访问不到，可以通过get判断值是否传进去
              console.log(param.get("file"));

                  let config = {
                    //添加请求头
                    headers: { "Content-Type": "multipart/form-data" },
                    //添加上传进度监听事件
                    onUploadProgress: e => {
                      var completeProgress = ((e.loaded / e.total * 100) | 0) + "%";
                      this.progress = completeProgress;
                    }
                  };

                  this.$axios.post('http://seal:8083/upload', param, config).then(
                  function (response) { 
                    console.log(response); 
                  }).catch(function (error) {
                      console.log(error);
                  });
            }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

  .inputfile {
            width: 0.1px;
            height: 0.1px;
            opacity: 0;
            overflow: hidden;
            position: absolute;
            z-index: -1;
        }
</style>
