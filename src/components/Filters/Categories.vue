<!--
@Author: Andree Ray <andreeray>
@Date:   2018-02-09T11:41:00+01:00
@Email:  andreeray@live.com
@Filename: Categoires.vue
@Last modified by:   andreeray
@Last modified time: 2018-03-01T10:16:44+01:00
-->

<template>
    <div :class="categoryFilterClass" @click="filter">
        <span class="checkbox"></span>
        <span> {{ category }} </span>
   </div>
</template>

<script>
export default {
    props: [ 'category' ],
    data() {
        return {
            checked: false
        }
    },
    methods: {
        filter () {
            this.checked = !this.checked
            this.$bus.$emit('filter', 'filterCategories', this.category, this.checked)
        },
    },
    computed: {
        categoryFilterClass () {
            return {
                'category-filter': true,
                'active': this.checked
            }
        }
    }
}
</script>

<style lang="css">
</style>
