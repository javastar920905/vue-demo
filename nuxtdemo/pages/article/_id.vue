<template>
   <div>
        <h1>{{article.title}}</h1>
        {{article.articleContent}}
   </div>
</template>
<script>
export default {
    data () {
        return {
          article: { }
        }
  },
  fetch ({ app }) {
   //console.log(app.$axios)
  },
  async  asyncData ({ app,params }) {
    let articleId=params.id;//'ca567cdd04e20f4945c88f9efb2b8076';
    let detailUrl= 'https://www.7easytax.com/article/article/'+articleId
    let { data } = await app.$axios.get(detailUrl);
    return {
        article:data.data //asyncData 的return 会更新data 中数据
    }
    
  },
  created () {
    console.log(this.$axios)
  }
}
</script>

