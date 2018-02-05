/**
 * @Author: Andree Ray <andreeray>
 * @Date:   2018-01-07T12:25:11+01:00
 * @Email:  andreeray@live.com
 * @Filename: main.js
 * @Last modified by:   andreeray
 * @Last modified time: 2018-02-01T12:48:36+01:00
 */

import Vue from 'vue'

import '../node_modules/devel-style/devel-style.css'
import './assets/transitions.css'
import './assets/style.scss'

import App from './App.vue'

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://35.189.243.23:3000/log'

import VueRouter from 'vue-router'
import routes  from './util/routes'
Vue.use(VueRouter)
const router = new VueRouter({ routes })

new Vue({
    el: '#shell',
    data: {
        postsResults: [],
        loading: false
    },
    components: {
        App
    },
    created() {
        this.loading = true
        this.$http.get('posts/').then(res => {
            this.postsResults = res.data
        })
            .then(function (res) {
                this.loading = false
            })
            .catch(function (error) { console.log(error) })
    },
    router
})
