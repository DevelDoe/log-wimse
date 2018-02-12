<!--
@Author: Andree Ray <andreeray>
@Date:   2018-02-01T12:44:46+01:00
@Email:  andreeray@live.com
@Filename: App.vue
@Last modified by:   andreeray
@Last modified time: 2018-02-12T12:35:42+01:00
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
                <post-list :posts-results="postsResults" :loading="loading" :filter-categories="filterCategories" :filter-tags="filterTags"></post-list>
                <filter-list :categories="categories" :tags="tags" @categories-filter="filters" @tags-filter="filters"></filter-list>
            </div>
        </div>
        <div v-if="loading">loading...</div>
    </div>
</template>

<script>
import PostList     from './components/Posts/PostList.vue'
import FilterList   from './components/Filters/FilterList.vue'

export default {
    props: [ 'postsResults', 'loading' ],
    data() {
        return {
            newSearchTerm: '',
            lastSearchTerm: '',
            searching: false,
            filterCategories: [],
            filterTags: []
        }
    },
    components: {
        PostList,
        FilterList
    },
    methods: {
        filters (filter, name, checked) {
            if (checked) {
                this[filter].push(name)
            } else {
                let index = this[filter].indexOf(name)
                if (index > -1) {
                    this[filter].splice(index, 1)
                }
            }
        },
        onSearch (e) {
            if (this.newSearchTerm.length) {
                this.posts = []
                this.loading = true
                this.searching = true
                this.$http.get('search/'.concat(this.newSearchTerm))
                    .then(res => {
                        this.lastSearchTerm = this.newSearchTerm
                        this.posts = this.postsResults.slice(1,5)
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
        },
        tags () {
            let tags = []
            this.postsResults.forEach(post => {
                post.tags.forEach((tag) => {
                    tags.push(tag)
                })
            })
            var unique = tags.filter(function(elem, index, self) {
                return index === self.indexOf(elem);
            })
            return unique || null
        }
    }
}
</script>

<style lang="css">

</style>
