<template>
    <div >
        <div class='img-box' :sytle="{backgroundImage:'url('+url+')'}"></div>
        <img :src="url">
        {{$router.params.index}}
    </div>
</template>

<script>
    import Vue from 'vue'
    // import VueTouch from 'vue-touch'
    // Vue.use(VueTouch)
    export default {
        computed: {
            url(){
                return this.$store.state.photoData[this.$route.params.index].src
            }
        }
    }
</script>

<style scoped>
    .img-box{
        position: absolute;
        left: 0;
        top: 1rem;
        bottom: 1rem;
        right: 0;
        background: #000 url() 0 center no-repeat;
        background-size: contain;
    }
</style>