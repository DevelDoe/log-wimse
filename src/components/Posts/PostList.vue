<!--
@Author: Andree Ray <andreeray>
@Date:   2018-01-07T13:10:34+01:00
@Email:  andreeray@live.com
@Filename: Overview.vue
@Last modified by:   andreeray
@Last modified time: 2018-02-19T13:30:59+01:00
-->
<template lang="html">
    <div id="post-list">

        <div v-if="!loading">

                <div v-if="filteredPosts.length && filteredPosts.length < postsResults.length">
                    <transition-group name="slide-fade">
                        <PostItem v-for='post in filteredPosts' :post="post" :key="post._id"></PostItem>
                    </transition-group>
                </div>

                <div v-else-if="filteredPosts.length && filteredPosts.length < postsResults.length">
                    <transition-group name="slide-fade">
                        <PostItem v-for='post in filteredPosts' :post="post" :key="post._id"></PostItem>
                    </transition-group>
                </div>

                <div v-else-if="filteredPosts.length === 0">
                    {{ noResults }}
                </div>
                <div v-else-if="loading">
                    Loading
                </div>
                <div v-else>
                    <transition-group name="slide-fade">
                        <PostItem v-for='post in posts' :post="post" :key="post._id" :day="day"></PostItem>
                    </transition-group>
                </div>

            <div id="posts-list-bottom">
                <div v-if="noMoreItems">No more posts</div>
            </div>
        </div>

    </div>
</template>

<script>
import PostItem from './PostItem.vue'

export default {
        props: [ 'postsResults', 'loading', 'filterCategories', 'filterTags', 'day' ],
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
                var append = this.postsResults.slice(this.posts.length, this.posts.length + 6)
                this.posts = this.posts.concat(append)
            }
        },
        categoryFilter (post) {
            if ( !this.filterCategories.length ) {
                return true
            } else {
                return this.filterCategories.find(category => {
                    return post.category === category
                })
            }
        },
        tagsFilter (post) {
            if ( !this.filterTags.length ) {
                return true
            } else {
                let tags = post.tags
                let matched = true
                this.filterTags.forEach(tag => {
                    if ( tags.indexOf(tag) === -1 ) {
                        matched = false
                    }
                })
                return matched
            }
        }
    },
    computed: {
        filteredPosts () {
            return this.postsResults
                .filter(this.categoryFilter)
                .filter(this.tagsFilter)
        },
        noMoreItems () {
            return this.posts.length === this.postsResults.length && this.posts.length > 0 && this.filteredPosts.length !== 0
        },
        noResults () {
            let categories = this.filterCategories.length ? this.filterCategories.join(', ') : ''
            let tags = this.filterTags.length ? this.filterTags.join(', ') : ''
            return `No results for ${categories} ${ categories.length && tags.length ? ', ' : ''} ${tags}`
        }
    },
    mounted () {
        var that = this
        var scrollMonitor = require("scrollMonitor")
        var el = document.getElementById("posts-list-bottom")
        var watcher = scrollMonitor.create(el)
        watcher.enterViewport(function () {
            that.appendItems()
            console.log("appending")
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
