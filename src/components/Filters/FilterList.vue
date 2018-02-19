<!--
@Author: Andree Ray <andreeray>
@Date:   2018-01-07T13:10:34+01:00
@Email:  andreeray@live.com
@Filename: Overview.vue
@Last modified by:   andreeray
@Last modified time: 2018-02-19T13:28:56+01:00
-->
<template lang="html">
  <div id="filters">
      <h3>Categories</h3>
      <categories v-for="category in categories" :category="category" @filter="filter"></categories>
      <h3 v-if="filterCategories.length">Tags</h3>
      <tags v-for="tag in tags" :tag="tag" @filter="filter"></tags>
  </div>
</template>

<script>
import Categories from './Categories.vue'
import Tags from './Tags.vue'

export default {
    props: [ 'categories', 'tags', 'filterCategories' ],
    methods: {
        filter (filter, name, checked) {
            this.$emit('filter', filter, name, checked )
        }
    },
    components: {
        Categories,
        Tags
    }
}
</script>

<style media="screen">
    #filters {
        float: left;
        width: 20%;
    }
    .check-filter {
        cursor: pointer;
    }
    .checkbox {
        display: inline-block;
        position: relative;
        width: 20px;
        height: 20px;
        border: 1px solid white;
        border-radius: 3px;
        user-select: none;
        box-shadow: 1px 1px 2px rgba(0,0,0,0.3);
    }
    .active .checkbox::after {
        content: '';
        border-color: white;
        background-color: white;
        position: absolute;
        width: 14px;
        height: 14px;
        left: 2px;
        top: 2px;
        border-radius: 2px;
    }
</style>
