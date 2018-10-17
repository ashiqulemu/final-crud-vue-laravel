


require('./bootstrap');

window.Vue = require('vue');

    // my golbal component

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('header-component', require('./components/global/header.vue'));
Vue.component('sidebar-component', require('./components/global/sidebar.vue'));
Vue.component('footer-component', require('./components/global/footer.vue'));


import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// my local component

const router = new VueRouter({
    mode: 'history',
    routes: [

        //Product
        {
            path:'create-Product',
            name:'createProduct',
            component:require('./components/views/partial/createProduct.vue')
        },
        {
            path:'view-Product',
            name:'viewProduct',
            component:require('./components/views/partial/viewProduct.vue')
        },
        {
            path:'/:id/edit',
            name:'editProduct',
            component:require('./components/views/partial/editProduct.vue')
        },

        {
            path: '/',
            name: 'home',
            component: require('./components/views/home.vue')
        },
        {
            path: 'about',
            name: 'about',
            component: require('./components/views/about.vue')
        },
        {
            path: 'contact',
            name: 'contact',
            component: require('./components/views/contact.vue')
        },
    ],
});


new Vue({
    el: '#app',
    router,
});
