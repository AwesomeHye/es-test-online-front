<template>
<!--html 코드 (디자인)-->
  <div>
    <h1>Welcome to {{title}}</h1>
    <b-navbar toggleable="lg" type="dark" variant="success">
      <b-navbar-brand href="/">ES-ONLINE</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/">Nori</b-nav-item>
          <b-nav-item href="/about">Standard (ready)</b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
// 데이터바인딩, 이벤트 핸들링, 서버 통신 (자바스크립트)

export default {
  name: 'Header',
  data () {
    return {
      title: 'ES-ONLsINE'
    }
  }
}

</script>

<style scoped>

</style>
