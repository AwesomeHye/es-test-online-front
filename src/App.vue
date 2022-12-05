<script setup>
import mainHeader  from '@/components/common/mainHeader'
</script>

<template>
  <div id="container">
    <main-header />

    <section class="content" >
      <router-view />
    </section>
  </div>
</template>