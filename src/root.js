/**
 * @Author: Andree Ray <andreeray>
 * @Date:   2018-01-07T12:25:11+01:00
 * @Email:  andreeray@live.com
 * @Filename: main.js
 * @Last modified by:   andreeray
 * @Last modified time: 2018-01-17T23:22:50+01:00
 */

import Vue from 'vue'

import '../node_modules/devel-style/devel-style.css'

import Overview from './components/Overview.vue'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import VueRouter from 'vue-router'
import routes  from './util/routes'
Vue.use(VueRouter)
const router = new VueRouter({ routes })

new Vue({
    el: '#app',
    data: {
        posts: []
    },
    components: {
        Overview
    },
    created() {
        this.$http.get('http://35.198.129.236/log/posts/').then(res => {
            this.posts = res.data
        })
    },
    router
})
