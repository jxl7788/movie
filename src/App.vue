<template>
  <div id="app">
     <router-view></router-view>
    
  </div>
</template>

<script>
// import home from './components/home.vue';

import { mapGetters, mapActions } from 'vuex'
import * as types from './store/types.js'




export default {
  name: 'App',
  components:{
// home
  }
}
</script>

