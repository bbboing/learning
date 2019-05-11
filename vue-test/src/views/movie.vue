<template>
    <div class="movie-container">
        <ul>
            <li v-for='(obj,index) in movieList' :key='index' class='movie-list'>
                <img class='movie-img' src="" alt="">
                <div class='movie-word'>
                    <h4>{{obj.title}}</h4>
                    <span v-for='(cast,index) in obj.casts' :key='index'>{{cast.name}}</span>
                    <span>2323已观看</span>
                    <p>年份：2019</p>
                    <p>科幻</p>
                </div>
            </li>
        </ul>
        <div class='loading' v-show='isShow'>
            <img src="@/assets/imgs/loading.gif" alt="">
        </div>
    </div>
</template>

<script>
    // import Axios from 'axios';
    export default {
        data(){
            return{
                movieList:[],
                isShow: true,
                isBottom: false
            }
        },
        created(){
            
            // window.onscroll = () =>{
            //     let scrollTop = document.documentElement.scrollTop;
            //     let clientHeight = document.documentElement.clientHeight;
            //     let height = document.documentElement.scrollHeight;
            //     if(scrollTop + clientHeight == height){
            //         this.getMovie();
            //     }
            // }
        },
        methods:{
            // getMovie(){
            //     this.isShow = true;
            //     axios.get('/data/movie0.json')
            //     .then((result) =>{
            //     this.movieList = [...movieList,...result.data.subjects];
            //     this.isShow = false;
            //     if(this.movieList.length == result.data.total && !this.isBottom){
            //             this.isBottom = true;
            //         }
            //  })
            // }
        }
    }
</script>

<style scoped>
    .movie-container{
    padding:0 0.2rem;
    }
    .movie-list{
        display: flex;
        padding: .2rem;

    }
    .movie-img{
        width: 100px;
        height: 150px;
        margin-right: 0.2rem;
    }
    .movie-word{
        flex: 1;
    }
    .loading{
        position: fixed;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
        background: rgba(0,0,0,0.5);
    }
</style>