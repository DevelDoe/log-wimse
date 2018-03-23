<!--
@Author: Andree Ray <andreeray>
@Date:   2018-02-10T09:47:01+01:00
@Email:  andreeray@live.com
@Filename: Tags.vue
@Last modified by:   andreeray
@Last modified time: 2018-03-01T10:21:35+01:00
-->

<template>
    <div :class="tagsFilterClass" @click="filter">
        <span class="checkbox"></span>
        <span> {{ tag }} </span>
   </div>
</template>

<script>
export default {
    props: [ 'tag' ],
    data() {
        return {
            active: false
        }
    },
    methods: {
        filter () {
            this.active = !this.active
            this.$bus.$emit('filter', 'filterTags', this.tag, this.active)
        }
    },
    computed: {
        tagsFilterClass () {
            return {
                'tags-filter': true,
                'active' : this.active
            }
        }
    }
}
</script>

<style lang="css">
</style>
