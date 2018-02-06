<!--
@Author: Andree Ray <andreeray>
@Date:   2018-02-01T12:44:46+01:00
@Email:  andreeray@live.com
@Filename: App.vue
@Last modified by:   andreeray
@Last modified time: 2018-02-06T21:06:49+01:00
-->
<template>
    <div id="app">
        <div>
            <form  @submit.prevent="onSearch" class="group">
                <input id="searchInput" type="text" placeholder="Search" v-model="newSearchTerm">
            </form>
        </div>
        <transition name="fade">
        <div class="" v-if="searching && !loading">
            <div>Found {{ postsResults.length }} results for <b>"{{ lastSearchTerm }}"</b> </div>
        </div>
        </transition>
        <div v-if="!loading" >
            <div id="main" class="group">
                <post-list :posts-results="postsResults" :loading="loading"></post-list>
                <post-filter :categories="categories" ></post-filter>
            </div>
        </div>
        <div v-if="loading">loading...</div>
    </div>
</template>

<script>
import PostList from './components/PostList.vue'
import PostFilter from './components/PostFilter.vue'

export default {
    props: [ 'postsResults', 'loading' ],
    data() {
        return {
            newSearchTerm: '',
            lastSearchTerm: '',
            searching: false
        }
    },
    components: {
        PostList,
        PostFilter
    },
    methods: {
        onSearch (e) {
            if (this.newSearchTerm.length) {
                this.posts = []
                this.loading = true
                this.searching = true
                this.$http.get('search/'.concat(this.newSearchTerm))
                    .then(res => {
                        this.lastSearchTerm = this.newSearchTerm
                        this.posts = this.postResults.slice(1,5)
                        this.loading = false
                    })
            }
        }
    },
    computed:{
        categories () {
            let categories = this.postsResults.map(post => {
                return post.category
            })
            var unique = categories.filter(function(elem, index, self) {
                return index === self.indexOf(elem);
            })
            return unique || null
        }

    }
}
</script>

<style lang="css">
    .fade-enter-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>
