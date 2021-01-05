<template>
  <div class="navigation">
    <ul>
      <li class="Nav">Home</li>
      <li class="Nav">Home</li>
      <li class="Nav">Home</li>
    </ul>
    <div class="search">
      <input type="text" placeholder="Search lumalaxy..." >
      <i class="fas fa-search"></i>
    </div>
  </div>
</template>

<script lang="ts">
import "../VideoUtils.ts";


export default {
  name: "Navigation",
  data () {
    return {
      foo: null,
    }
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>

</style>