<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
        <div class="background">
          <h1>欢迎大家品尝pizza</h1>

          <h2>这里有你非常喜欢的pizza</h2>
       
           <button @click="gotTomenu()" class="btn btn-success">let's order</button>
            <hr/>
        </div>
      

    </div>
   <h1> {{msg}}</h1>
    
    </div>
  
</template>

<script>


export default {
  name: 'home',
  data () {
    return {
      msg: 'this home page'
    }
  },
  methods: {
    gotTomenu:function(){
      this.$router.push("/menu");
      //this.$router.replace("/menu"); 
    }
  }
}
</script>

<style scoped>
#home{
  background: url('../assets/pizza-nav.jpg');
  height: 85vh;
  padding: 10%;
}

h1,h2{
  margin: 6%;
}
.background{
  background: #eee;
  opacity: 0.8;
  max-width:70vw ;

}
</style>
