const Vue = require('vue/dist/vue');
const template = require('./demo.html');


Vue.component('dizhi',{
    props:['xinxi'],
    template:`
        <div>
            <slot/><br/>
            <input :value="xinxi" placeholder="请输入地址">
        </div> 
    `
})

var vm = new Vue({
    el:'#app',
    data:{
        sousuo:'',
        placeholder:'搜索饿了么商家、商品名称'
    },
    template,
})