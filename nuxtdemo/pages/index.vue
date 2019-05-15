<template>
  <div class="container">
    <Top />

    <section >
      <div>
        <h2 class="subtitle">
          资讯列表演示demo
        </h2>
        <div class="links">
          <!-- <nuxt-link to="/article/list">资讯列表页</nuxt-link>
          <nuxt-link to="/article/detail">资讯详情页</nuxt-link> -->
          <ul id="example-1">
          <template v-if="pageInfo">
              <li v-for="article in pageInfo.list" v-bind:key="article.articleId">
                <nuxt-link  :to="{name:'article-id',params:{id:article.articleId}}">{{article.title}}</nuxt-link> 
              </li>
          </template>
          </ul>
        </div>
      </div>
    </section>

    <Footer/>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
// import Header from "~/components/Header.vue";
import Top from "~/components/Top.vue";
import Footer from "~/components/Footer.vue";
import axios from "axios";


export default {
  components: {
    Logo,
    Top,
    Footer

  },
  data() {
    return {
      pageInfo: {
        pageSize: 10,
        pageNum: 1,
        list: []
      }
    };
  },
  fetch({ app }) {
    //console.log(app.$axios)
  },
  async asyncData({ app }) {
    let listUrl =
      "http://dev.7easytax.com/article/list/?articleType=35&taxClassificationId=&pageSize=10&pageNum=1";
    let { data } = await app.$axios.get(listUrl);
    return {
      pageInfo: data.data //asyncData 的return 会更新data 中数据
    };
  },
  created() {
    console.log(this.$axios);
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
