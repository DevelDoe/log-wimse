<!--
@Author: Andree Ray <andreeray>
@Date:   2018-02-09T11:41:00+01:00
@Email:  andreeray@live.com
@Filename: Categoires.vue
@Last modified by:   andreeray
@Last modified time: 2018-02-10T09:51:23+01:00
-->

<template>
    <div :class="{ 'category-filter' : true, 'active' : checked }" @click="categoriesFilter">
        <span class="checkbox"></span>
        <span v-if="category"> {{ category }} </span>
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
        categoriesFilter () {
            this.checked = !this.checked
            this.$emit('categories-filter', 'filterCategories', this.category, this.checked)
        }
    }
}
</script>

<style lang="css">
</style>
