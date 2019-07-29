<template>
    <div id="nav">
        <ul >
            <li>推荐</li>
            <li>视频</li>
            <li>热点</li>
            <li>社会</li>
            <li>娱乐</li>
            <li>军事</li>
            <li>科技</li>
            <li>汽车</li>
            <li>房产</li>
            <li>家居</li>
            <li>体育</li>
            <li>财经</li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #nav{
        background: #ccc;
        overflow: auto;
    }
    ul{
        list-style: none;
        white-space:nowrap;
        width: 600px;
        line-height: 40px;
    }
    li{
        float: left;
        padding-left: 8px;
    }
</style>
