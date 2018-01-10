<!--
@Author: Andree Ray <andreeray>
@Date:   2018-01-07T14:01:40+01:00
@Email:  andreeray@live.com
@Filename: Overview.vue
@Last modified by:   andreeray
@Last modified time: 2018-01-07T17:16:15+01:00
-->
<template lang="html">
    <div class="">
        <post-list v-bind:posts="posts"></post-list>
        <post-filter></post-filter>
    </div>
</template>

<script>
import PostList from './PostList.vue'
import PostFilter from './PostFilter.vue'

export default {
    props: [ 'posts' ],
    components: {
        PostList,
        PostFilter
    }
}
</script>
