<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <el-button type="success">dhjdkhfkjsh</el-button>
    <div class="ajax">
      <h3>姓名： {{name}}</h3>
      <el-button type="success" @click="getName">获取数据</el-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
// import { get } from '../http/api'
import { get } from '@/http/api'

export default {
  name: 'Home',
  data(){
    return {
      name : ''
    }
  },
  methods:{
    getName(){
      // axios.get('https://cdn.liyanhui.com/data.json').then(res=>{
      //   console.log(res.data)
      // })
      get('https://cdn.liyanhui.com/data.json').then(data =>{
        this.name = data[0].username
        console.log(data)
      })
    },
    getName2(){
      axios.get('/data.json').then(res=>{
        console.log(res.data)
      })
    },
  },
  components: {
    HelloWorld
  }
}
</script>
