<!--
@Author: Andree Ray <andreeray>
@Date:   2018-02-01T12:44:46+01:00
@Email:  andreeray@live.com
@Filename: App.vue
@Last modified by:   andreeray
@Last modified time: 2018-02-19T13:28:24+01:00
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
                <post-list :posts-results="postsResults" :loading="loading" :filter-categories="filterCategories" :filter-tags="filterTags" :day="day"></post-list>
                <filter-list :categories="categories" :tags="tags" @filter="filters" :filterCategories="filterCategories" ></filter-list>
            </div>
        </div>
        <div v-if="loading">loading...</div>
    </div>
</template>

<script>
import PostList     from './components/Posts/PostList.vue'
import FilterList   from './components/Filters/FilterList.vue'

export default {
    props: [ 'postsResults', 'loading', 'day' ],
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
        categories () {
            let posts = this.postsResults.filter(this.tagsFilter)
            let categories = posts.map(post => {
                return post.category
            })
            var unique = categories.filter(function(elem, index, self) {
                return index === self.indexOf(elem);
            })
            return unique || null
        },
        tags () {
            if (this.filterCategories.length) {
                let tags = []
                let posts = this.postsResults.filter(this.categoryFilter)
                posts.forEach(post => {
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
}
</script>

<style lang="css">

</style>
