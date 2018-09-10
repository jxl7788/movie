<template>
  <div class="home">
    <slider></slider>
    <list :list="list" :dataName="'home'"></list>
  </div>
</template>
<script>
import slider from './slider.vue';
import list from './list.vue';


export default {
data(){
  return{
    list:[]
  }
},
components:{
 slider,list
  },
  created(){
   this.$http({
     url:`/static/data/index.data`,
   }).then(
     res=>this.list=res.data
   )
  }
}
</script>
