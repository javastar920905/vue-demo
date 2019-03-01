<template>
  <div id="app">
    <appHeader></appHeader>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components: {
    appHeader:Header
  }
}
</script>

<style>

</style>
