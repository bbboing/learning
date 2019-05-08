<template>
    <div class='header'>
        <span class='header-title'>电影</span>
        <span class='header-btn'>首页</span>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .header{
        height:1rem;
        width: 100%;
        background: #f00;
        line-height: 1rem;
        color: #fff;
        position: fixed;
    }
    .header-title{
        position: absolute;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
    }
</style>