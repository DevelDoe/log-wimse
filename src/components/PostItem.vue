<!--
@Author: Andree Ray <andreeray>
@Date:   2018-01-07T13:37:40+01:00
@Email:  andreeray@live.com
@Filename: PostItem.vue
@Last modified by:   andreeray
@Last modified time: 2018-01-29T19:07:17+01:00
-->
<template>
    <div class='post'>
        <router-link v-bind:to="{ name: 'post', params: { id: post._id } }">

            <div class="category-img" v-if="imgSrc">
                <img :src="imgSrc" />
            </div>

            <h2>{{ post.title }}</h2>
            <p><small>{{ post.summary }}</small></p>

        </router-link>
    </div>
</template>

<script>
export default {
    props: [ 'post' ],
    computed: {
        imgSrc () {
            let category = this.post.category

            switch (category) {
                case "JavaScript":
                    return "https://openclipart.org/image/800px/svg_to_png/272343/1486640684.png" || null
                    break
                case "CSS":
                    return "http://w3widgets.com/responsive-slider/img/css3.png" || null
                    break
                case "HTML":
                    return "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png" || null
                    break
                default:
                    return null
                    break
            }

        }
    }
}
</script>
<style media="screen">
    .category-img img {
        width: 5%;
    }
    .fade {
        opacity: 0;
    }
    .fade-enter-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>
