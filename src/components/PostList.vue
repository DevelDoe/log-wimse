<!--
@Author: Andree Ray <andreeray>
@Date:   2018-01-07T13:10:34+01:00
@Email:  andreeray@live.com
@Filename: Overview.vue
@Last modified by:   andreeray
@Last modified time: 2018-01-07T13:57:59+01:00
-->
<template lang="html">
  <div id="post-list">
      <PostItem v-for=' post in posts' v-bind:post="post"></PostItem>
  </div>
</template>

<script>
import PostItem from './PostItem.vue'

export default {
    props: ['posts'],
    components: {
        PostItem
    }
}
</script>
