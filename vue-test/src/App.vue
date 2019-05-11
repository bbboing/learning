<template>
  <div id="app">
    <common-header :selectMenu='selectMenu'></common-header>
    <div id='content'>
      <router-view></router-view>
    </div>
    <common-footer :menu="menu" :selectMenu='selectMenu' @change="fn" ></common-footer>
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
      ],
      selectMenu:{
        name:'电影',
        path:'/movie',
        bg:'#f00'
      }
    }
  },
  components:{
    CommonHeader,
    CommonFooter
  },
  methods:{
    fn(index){
      this.selectMenu = this.menu[index];
    },
    created(){
      this.menu.foreach( (obj) => {
        if(obj.path == this.$route.path)
          this.selectMenu = obj;
      })
    }
  }
}
</script>

<style>

</style>
