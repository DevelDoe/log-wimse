<!--
@Author: Andree Ray <andreeray>
@Date:   2018-01-07T13:10:34+01:00
@Email:  andreeray@live.com
@Filename: Overview.vue
@Last modified by:   andreeray
@Last modified time: 2018-02-08T11:53:10+01:00
-->
<template lang="html">
  <div id="post-filter">
      <h2>Filters</h2>
      <h3>Categories</h3>
      <check-filter v-for="category in categories" :category="category" @check-filter="checkFilter"></check-filter>
  </div>
</template>

<script>
export default {
    props: [ 'categories'],
    methods: {
        checkFilter (filter, name, checked) {
            this.$emit('check-filter', filter, name, checked )
        }
    },
    components: {
        'check-filter': {
            data() {
                return {
                    checked: true
                }
            },
            props: [ 'category' ],
            template: `<div :class="{ 'check-filter' : true, 'active' : checked }" @click="checkFilter">
                        <span class="checkbox"></span>
                        <span v-if="category"> {{ category }} </span>
                       </div>`,
            methods: {
                checkFilter () {
                    this.checked = !this.checked
                    this.$emit('check-filter', 'categories', this.category, this.checked)
                }
            }
        }
    }
}
</script>

<style media="screen">
    #post-filter {
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
