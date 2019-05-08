<template>
  <div id="app">
    <common-header ></common-header>
    内容
    <common-footer :menu="menu"></common-footer>
  </div>
</template>
<script>
import CommonHeader from '@/components/CommonHeader.vue'
import CommonFooter from '@/components/CommonFooter.vue'
export default {
  data(){
    return{
      menu:[
        {
          name:'电影',
          path:'/movie',
          bg:'#f00'
        },{
          name:'音乐',
          path:'/music',
          bg:'#ffff44'
        },{
          name:'图书',
          path:'/movie',
          bg:'#009933'
        },{
          name:'图片',
          path:'/photo',
          bg:'#ffaa00'
        }
      ]
    }
  },
  components:{
    CommonHeader,
    CommonFooter
  }
}
</script>

<style>

</style>
