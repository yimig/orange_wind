import './res/styles/index.less';
import 'tailwindcss/tailwind.css'
import Vue from 'vue';
import less from 'less';
import MainLayout from "./components/MainLayout/MainLayout.vue";

var arti = document.getElementById('arti').innerHTML;
Vue.use(less);
new Vue({
    el:'#content',
    render:(h,props)=>h(MainLayout,{
        props:{
            text:arti,
        },
    })
});
