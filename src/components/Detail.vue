<!--
@Author: Andree Ray <andreeray>
@Date:   2018-01-07T15:11:13+01:00
@Email:  andreeray@live.com
@Filename: Detail.vue
@Last modified by:   andreeray
@Last modified time: 2018-01-29T18:57:49+01:00
-->

<template>
    <div id="detail">
        <div id="home-link">
            <router-link v-bind:to="{ name: 'home' }">Tillbaka hem</router-link>
        </div>
        <div  v-if="post">

            <div>Title: {{ post.title }}</div>

            <div> Time: {{ post.createdAt | formatDate }} </div>

            <div> Category: {{ post.category }} </div>

            <!-- markdown parsing -->
            <span v-html="markedSummary"></span>
            <span v-html="markedBody"></span>

            <div class="">
                Tags: <span v-for="tag in post.tags">  {{ tag }} </span>
            </div>

            <div> Published: {{ post.published }} </div>

        </div>
    </div>
</template>

<script>
import PostItem from './PostItem.vue'
var marked = require( "marked" )
var highlight = require('highlighter')()
import moment from 'moment'

marked.setOptions({
  highlight: highlight
})


export default {
    props: [ 'postsResults' ],
    computed: {
        post () {
            let post = this.postsResults.find(post => post._id === this.$route.params.id)
            return post || null
        },
        markedSummary () {
            let summary = this.post.summary
            return marked(summary)
        },
        markedBody () {
            let body = this.post.body
            return marked(body)
        }
    },
    filters: {
        formatDate (date) {
            return moment.unix(date).format("DD/MM/YYYY")
        }
    },
    components: {
        PostItem
    }
}
</script>
