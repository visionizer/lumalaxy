<template>
    <div class="navigation">
    </div>
</template>



<script lang="ts">
  import "../VideoUtils.ts";


  export default {
    name: "Navigation",
    data() {
      return {
        foo: null,
      }
    },
    methods: {}
  };
</script>


<style scoped lang="scss">
navigation {
	height: 60px;
	width: 100%;
	box-shadow: 2px 2px 2px #CCC;
	ul {
		display: flex;
		height: 100%;
		align-items: center;
		margin-block-start: 0;
		margin-block-end: 0;
		padding-inline-start: 0;
		box-shadow: 2px 2px 2px #CCC;
		figure {
			cursor: pointer;
			margin-right: 10px;
		}
		a {
			text-decoration: none;
			display: flex;
			flex-direction: row-reverse;
			align-items: center;
		}
		i {
			margin-right: 10px;
			font-size: 22px;
		}
		li {
			list-style-type: none;
			padding: 10px 20px;
		}
	}
}
@media screen and (max-width: 759px) {
	navigation {
		ul {
			position: absolute;
			width: 300px;
			flex-direction: column;
			left: -240px;
			transition: 300ms ease all;
			top: 60px;
			&.active {
				left: 0px;
			}
			figure {
				position: fixed;
				z-index: 1;
				top: 10px;
				left: 2px;
			}
			li {
				width: 100%;
				padding-left: 0;
				padding-right: 0;
			}
			a {
				flex-direction: row;
				margin-left: 20px;
				justify-content: space-between;
				margin-right: 13px;
			}
		}
	}
}
</style>