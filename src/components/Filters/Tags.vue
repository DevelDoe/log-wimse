<!--
@Author: Andree Ray <andreeray>
@Date:   2018-02-10T09:47:01+01:00
@Email:  andreeray@live.com
@Filename: Tags.vue
@Last modified by:   andreeray
@Last modified time: 2018-02-10T09:51:22+01:00
-->

<template>
    <div :class="{ 'tags-filter' : true, 'active' : checked }" @click="tagsFilter">
        <span class="checkbox"></span>
        <span v-if="tag"> {{ tag }} </span>
   </div>
</template>

<script>
export default {
    props: [ 'tag' ],
    data() {
        return {
            checked: false
        }
    },
    methods: {
        tagsFilter () {
            this.checked = !this.checked
            this.$emit('tags-filter', 'filterTags', this.tag, this.checked)
        }
    }
}
</script>

<style lang="css">
</style>
