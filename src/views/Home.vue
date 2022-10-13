<template>
    <div>
      <h1>Welcome to {{title}}</h1>
      <input type="text" v-model="input1">
      <button type="button" @click="getData">GET</button>
      <button type="button" @click="setData">SET</button>
      <select class="form-control" v-model="region"  @change="changeRegion"> <!--v-model 과 :value 가 데이터 동기화된다. region바꾸면 value 도 바뀜-->
        <option :key="i" :value="d.v"  v-for="(d,i) in options">{{d.t}}</option> <!-- 매트리뷰트 안에서는 : , html 코드에서는 {{}} 로 데이터 접근한다. -->
      </select>

<!--      <table class="table table-bordered" v-if="tableShow">-->
      <table class="table table-bordered" v-show="tableShow"> <!--if는 불만족하면 렌더링 자체를 안하지만 show는 렌더링은 하고 보여주지만 않을 뿐이다 -->
        <tr :key="i" v-for="(d,i) in options">
          <td>{{d.v}}</td>
          <td>{{d.t}}</td>
        </tr>
      </table>
    </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'ES-ONLsINE',
      input1: 'aa', // 2way binding. 양 쪽에서 바꿔도 input1 에 값 변경된다.
      options: [
        {v: 'S', t: 'Seoul'},
        {v: 'J', t: 'Jeju'},
        {v: 'B', t: 'Busan'}
      ],
      region: 'J',
      tableShow: false
    }
  },
  methods: {
    getData () {
      alert(this.input1)
    },
    setData () {
      this.input1 = '12345'// 2way binding. 양 쪽에서 바꿔도 input1 에 값 변경된다.
    },
    changeRegion() {
      alert(this.region)
    }
  },
  watch: {
    input1 () {
      console.log(this.input1)
    }
  },
  beforeCreate () {
    console.log('1')
  },
  created () {
    console.log('2')
  },
  beforeMount () {
    console.log('3')
  },
  mounted () {
    console.log('4')
  },
  beforeUpdate () {
    console.log('5')
  },
  updated () {
    console.log('6')
  },
  beforeDestroy () {
    console.log('7')
  },
  destroyed () {
    console.log('8')
  }
}
</script>

<style scoped>

</style>
