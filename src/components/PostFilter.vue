<!--
@Author: Andree Ray <andreeray>
@Date:   2018-01-07T13:10:34+01:00
@Email:  andreeray@live.com
@Filename: Overview.vue
@Last modified by:   andreeray
@Last modified time: 2018-02-06T21:25:13+01:00
-->
<template lang="html">
  <div id="post-filter">
      <h2>Filter List</h2>
      <check-filter v-for="category in categories" :title="category"></check-filter>
  </div>
</template>

<script>
export default {
    props: [ 'categories' ],
    components: {
        'check-filter': {
            props: [ 'title' ],
            template: `<div>
                        <span class="active checkbox"></span>
                        <span> {{ title }} </span>
                       </div>`
        }
    }
}
</script>

<style media="screen">
    #post-filter {
        float: left;
        width: 20%;
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
    .active::after {
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
