<!--
@Author: Andree Ray <andreeray>
@Date:   2018-01-07T15:11:13+01:00
@Email:  andreeray@live.com
@Filename: Detail.vue
@Last modified by:   andreeray
@Last modified time: 2018-01-10T18:48:31+01:00
-->

<template>
    <div id="detail">
        <div id="home-link">
            <router-link v-bind:to="{ name: 'home' }">Tillbaka hem</router-link>
        </div>
        <div  v-if="post && title && summary && body && categories && tags">

            <span v-html="title"></span>
            <span v-html="summary"></span>
            <span v-html="body"></span>

            <div v-for="category in categories">
                    Categories: {{ category }}
            </div>
            <div v-for="tag in tags">
                    Tags: {{ tag }}
            </div>
        </div>
    </div>
</template>

<script>
import PostItem from './PostItem.vue'
var markdown = require( "markdown" ).markdown;


export default {
    props: [ 'posts' ],
    computed: {
        post () {
            let post = this.posts.find(post => post._id === this.$route.params.id)
            return post || null
        },
        title () {
            let title = this.post.title
            return markdown.toHTML(title) || null
        },
        summary () {
            let summary = this.post.summary
            return markdown.toHTML(summary)
        },
        body () {
            let body = this.post.body
            return markdown.toHTML(body)
        },
        categories () {
            let categories = this.post.categories
            return categories || null
        },
        tags () {
            let tags = this.post.tags
            return tags || null
        }
    },
    components: {
        PostItem
    }
}
</script>
