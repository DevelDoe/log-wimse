<!--
@Author: Andree Ray <andreeray>
@Date:   2018-01-07T13:10:34+01:00
@Email:  andreeray@live.com
@Filename: Overview.vue
@Last modified by:   andreeray
@Last modified time: 2018-02-12T16:35:42+01:00
-->
<template lang="html">
    <div id="post-list">

        <div v-if="!loading">
            <transition-group name="slide-fade">
                <PostItem v-for='post in filteredPosts' :post="post" :key="post._id"></PostItem>
            </transition-group>
            <div id="posts-list-bottom">
                <div v-if="noMoreItems">No more posts</div>
            </div>
        </div>

    </div>
</template>

<script>
import PostItem from './PostItem.vue'

export default {
    props: [ 'postsResults', 'loading', 'filterCategories', 'filterTags'],
    data() {
        return {
            posts: []
        }
    },
    components: {
        PostItem
    },
    methods: {
        appendItems () {
            if (this.posts.length < this.postsResults.length) {
                var append = this.postsResults.slice(this.posts.length, this.posts.length + 8)
                this.posts = this.posts.concat(append)
            }
        },
        postFilter (post) {
            if ( !this.filterCategories.length && !this.filterTags.length ) {
                return true
            } else {
                if ( this.filterCategories.length ) {
                    return this.filterCategories.find(category => {
                        return post.category === category
                    })
                }
                if ( this.filterTags.length ) {
                    return this.filterTags.find(filter => {
                        return post.tags.find(tag => filter === tag)
                    })
                }
            }
        }
    },
    computed: {
        filteredPosts () {
            return this.postsResults.filter(this.postFilter)
        },
        noMoreItems () {
            return this.posts.length === this.postsResults.length && this.posts.length > 0
        }
    },
    mounted() {
        var that = this
        var scrollMonitor = require("scrollMonitor")
        var el = document.getElementById("posts-list-bottom")
        var watcher = scrollMonitor.create(el)
        watcher.enterViewport(function () {
            that.appendItems()
        })
    }
}
</script>
<style media="screen">
    #post-list {
        float: left;
        width: 80%;
    }
</style>
