<template>
  <div id="app">
    <Header />
    <div id="content" class="content">
<!--path가 바뀔 때마다 헤더(네비)는 안바뀌고 아래 컨텐츠만 재로딩된다-->
      <router-view/>
    </div>
<!--    <img src="./assets/logo.png">-->
<!--    <router-view/>-->
  </div>
</template>

<script>
import Header from '@/components/layout/Header'
export default {
  name: 'App',
  components: {Header},
  comments: {
    Header
  }
}
</script>

<style >
/*<style lang="scss">*/
/*  @import 'sass/main.scss';*/

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  body {
    height: 100%;

    #app {
      height: 100%;
    }
  }
</style>
