<!--
@Author: Andree Ray <andreeray>
@Date:   2018-01-07T13:37:40+01:00
@Email:  andreeray@live.com
@Filename: PostItem.vue
@Last modified by:   andreeray
@Last modified time: 2018-01-10T17:23:08+01:00
-->
<template>
    <div class='post'>
        <router-link v-bind:to="{ name: 'post', params: { id: post._id } }">
            <h2>{{ post.title }}</h2>
            <p><small>{{ post.summary }}</small></p>
        </router-link>
    </div>
</template>

<script>
export default {
    props: [ 'post' ]
}
</script>
