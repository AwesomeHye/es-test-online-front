<script setup>
import { ref, inject, } from 'vue'

const result = ref('')

const api = inject('api')

async function getOrganization() {
  const res = await api.getOrganization({

  })

  if (res.result === 'success') {
    
  } else if (res.result === 'fail') {
    
  }

}

</script>

<template>
  <div id="noriPage">
    <table>
      <tr>
        <th>Decompound Mode</th>
        <td>
          <label>
            <input type="radio" name="decompound" value="mixed">
            <span>Mixed</span>
          </label>
          <label>
            <input type="radio" name="decompound" value="Discard">
            <span>Discard</span>
          </label>
          <label>
            <input type="radio" name="decompound" value="None">
            <span>None</span>
          </label>
        </td>
      </tr>
      <tr>
        <th>Discard Punctuation</th>
        <td>
          <label>
            <input type="radio" name="discard" value="true">
            <span>True</span>
          </label>
          <label>
            <input type="radio" name="discard" value="false">
            <span>False</span>
          </label>
        </td>
      </tr>
      <tr>
        <th>Nori Part Of Speech</th>
        <td>
          <label>
            <input type="checkbox" name="speech" value="1">
            <span>E</span>
          </label>
          <label>
            <input type="checkbox" name="speech" value="2">
            <span>IC</span>
          </label>
          <label>
            <input type="checkbox" name="speech" value="3">
            <span>J</span>
          </label>
          <label>
            <input type="checkbox" name="speech" value="4">
            <span>E</span>
          </label>
          <label>
            <input type="checkbox" name="speech" value="5">
            <span>IC</span>
          </label>
          <label>
            <input type="checkbox" name="speech" value="6">
            <span>J</span>
          </label>
          <label>
            <input type="checkbox" name="speech" value="7">
            <span>E</span>
          </label>
          <label>
            <input type="checkbox" name="speech" value="8">
            <span>IC</span>
          </label>
          <label>
            <input type="checkbox" name="speech" value="9">
            <span>J</span>
          </label>
        </td>
      </tr>
    </table>
  
    <div class="btnBox">
      <a href="#" @click.prevent="">See Result</a>
    </div>
  
    <div class="resultBox">
      <input type="text" v-model="result" readonly>
    </div>
  </div>
</template>