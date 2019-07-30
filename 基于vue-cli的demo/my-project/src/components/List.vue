<template>
   <div id="list">
        <ul>
            <li v-for="tabs">
                {{content}}
            </li>
        </ul>   
    </div> 
</template>
<script>
export default {
    data(){
        return {
            tabs:[{
                title:'老谢',
                content:'大保健'
            }]
        }
    }
}
</script>
<style scoped>

</style>
