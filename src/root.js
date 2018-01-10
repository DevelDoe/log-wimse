/**
 * @Author: Andree Ray <andreeray>
 * @Date:   2018-01-07T12:25:11+01:00
 * @Email:  andreeray@live.com
 * @Filename: main.js
 * @Last modified by:   andreeray
 * @Last modified time: 2018-01-10T17:11:25+01:00
 */

import Vue from 'vue'
import '../node_modules/devel-style/devel-style.css'

import Overview from './components/Overview.vue'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes  from './util/routes'
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
        this.$http.get('http://develdevils.se/log/posts/').then(res => {
            this.posts = res.data
        })
    },
    router
})
