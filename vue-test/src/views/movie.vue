<template>
    <div>
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
    </div>
</template>

<script>
    import Axios from 'axios';
    export default {
        data(){
            return{
                movieList:[]
            }
        },
        created(){
            axios.get('/data/movie0.json')
.then((result) =>{
                this.movieList = result.data.subjects;
            })
        }
    }
</script>

<style scoped>
    .movie-list{
        display: flex;
        padding: .2rem;

    }
    .movie-img{
        width: 100px;
        height: 150px;
        margin-right: 0.2rem
    }
</style>