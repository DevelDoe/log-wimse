<!--
@Author: Andree Ray <andreeray>
@Date:   2018-02-10T09:47:01+01:00
@Email:  andreeray@live.com
@Filename: Tags.vue
@Last modified by:   andreeray
@Last modified time: 2018-02-19T12:14:58+01:00
-->

<template>
    <div :class="{ 'tags-filter' : true, 'active' : checked }" @click="filter">
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
        filter () {
            this.checked = !this.checked
            this.$emit('filter', 'filterTags', this.tag, this.checked)
        }
    }
}
</script>

<style lang="css">
</style>
