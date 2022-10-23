<template>
    <div>

      <b-form-group label="Decompound mode" v-slot="{ ariaDescribedby }">
        <b-form-radio-group
          id="radio-group-2"
          v-model="selected"
          :aria-describedby="ariaDescribedby"
          name="plain-inline"
          plain
        >
          <b-form-radio :key="i" :value="d.text" v-for="(d,i) in decompoundModeOptions">{{d.value}}</b-form-radio>
        </b-form-radio-group>
      </b-form-group>


      <b-form-checkbox
        id="checkbox-1"
        v-model="discardPunctuation"
        name="checkbox-1"
        value="accepted"
        unchecked-value="not_accepted"
      >
        discard_punctuation
      </b-form-checkbox>


      <b-form-group
        label="noriPartOfSpeech"
        v-slot="{ ariaDescribedby }"
      >
        <b-form-checkbox
          v-for="option in noriPartOfSpeechOptions"
          v-model="noriPartOfSpeechSelected"
          :key="option.value"
          :value="option.value"
          :aria-describedby="ariaDescribedby"
          name="flavour-4a"
          inline
        >
          {{ option.text }}
        </b-form-checkbox>
      </b-form-group>



      <input type="text" v-model="input1">
      <button type="button" @click="getData">GET</button>
      <button type="button" @click="setData">SET</button>
      <select class="form-control" v-model="region"  @change="changeRegion"> <!--text-model 과 :value 가 데이터 동기화된다. region바꾸면 value 도 바뀜-->
        <option :key="i" :value="d.text" v-for="(d,i) in decompoundModeOptions">{{d.value}}</option> <!-- 매트리뷰트 안에서는 : , html 코드에서는 {{}} 로 데이터 접근한다. -->
      </select>


      <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
      <div>State: <strong>{{ discardPunctuation }}</strong></div>
      <div class="mt-3">Selected: <strong>{{ noriPartOfSpeechSelected }}</strong></div>

      <b-button block variant="outline-success" @click="getResult">See Result!</b-button>

      <b-card class="text-center">
        <div class="bg-secondary text-ligh  t">
          {{resultText}}
        </div>
      </b-card>


    </div>
</template>

<script>
export default {
  data () {
    return {
      input1: 'aa', // 2way binding. 양 쪽에서 바꿔도 input1 에 값 변경된다.
      decompoundModeOptions: [
        {text: 'mixed', value: 'mixed'},
        {text: 'discard', value: 'discard'},
        {text: 'none', value: 'none'}
      ],
      noriPartOfSpeechOptions: [
        {text: 'E', value: 'E'}, {text: 'IC', value: 'IC'}, {text: 'J', value: 'J'},
        {text: 'MAG', value: 'MAG'}, {text: 'MAJ', value: 'MAJ'},  {text: 'MM', value: 'MM'},
        {text: 'SP', value: 'SP'}, {text: 'SSC', value: 'SSC'},  {text: 'SSO', value: 'SSO'},
        {text: 'SC', value: 'SC'}, {text: 'SE', value: 'SE'},  {text: 'XPN', value: 'XPN'},
        {text: 'XSA', value: 'XSA'}, {text: 'XSN', value: 'XSN'},  {text: 'XSV', value: 'XSV'},
        {text: 'UNA', value: 'UNA'}, {text: 'NA', value: 'NA'},  {text: 'VSV', value: 'VSV'}
      ],
      selected: '',
      noriPartOfSpeechSelected: [],
      discardPunctuation: true,
      region: 'J',
      tableShow: true,
      resultText: 's'
    }
  },
  methods: {
    getData () {
      alert(this.input1)
    },
    setData () {
      this.input1 = '12345'// 2way binding. 양 쪽에서 바꿔도 input1 에 값 변경된다.
    },
    changeRegion () {
      alert(this.region)
    },
    getResult () {
      this.$axios.get('http://127.0.0.1:8090/analyze/nori', {
        params: {
          'decompoundMode': 'mixed'
          , 'userDictionaryRules' : '가곡역 가곡 역'
          , 'discardPunctuation' : 'true'
          , 'noriPartOfSpeech' : 'NN'
          , 'inputText' : '아버지가 가방에 들어가고 싶다.'
        }
      }).then(response => {
        this.resultText = response.data
      }).catch(error => {
        console.error(error)
      })
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
