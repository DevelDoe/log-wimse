<!--
@Author: Andree Ray <andreeray>
@Date:   2018-01-07T13:10:34+01:00
@Email:  andreeray@live.com
@Filename: Overview.vue
@Last modified by:   andreeray
@Last modified time: 2018-02-09T07:25:12+01:00
-->
<template lang="html">
  <div id="filters">
      <h2>Filters</h2>
      <h3>Categories</h3>
      <categories-filter v-for="category in categories" :category="category" @categories-filter="categoriesFilter"></categories-filter>
  </div>
</template>

<script>
export default {
    props: [ 'categories', 'tags' ],
    methods: {
        categoriesFilter (filter, name, checked) {
            this.$emit('categories-filter', filter, name, checked )
        }
    },
    components: {
        'categories-filter': {
            data() {
                return {
                    checked: false
                }
            },
            props: [ 'category' ],
            template: `<div :class="{ 'check-filter' : true, 'active' : checked }" @click="categoriesFilter">
                        <span class="checkbox"></span>
                        <span v-if="category"> {{ category }} </span>
                       </div>`,
            methods: {
                categoriesFilter () {
                    this.checked = !this.checked
                    this.$emit('categories-filter', 'filterCategories', this.category, this.checked)
                }
            }
        }
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
