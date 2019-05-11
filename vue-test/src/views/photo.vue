<template>
    <div>
        <img v-for='(obj,index) in $store.state.photoData' :key='index' :src='obj.src' @click='goDetial(index)'/>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return{
            }
        },
        created(){
            axios.get('/data/photodata.json')
            .then((result) => {
                //this.photoData = result.data.photoData;     
                //使用vuex存储数据
                this.$store.commit('addPhoto', result.data.photoData);
            })
        },
        methods:{
            goDetail(){
                this.$router.push('/photoDetail/'+index)
            }
        }
    }
</script>

<style scoped>
    img{
        height: 50%;
    }
</style>