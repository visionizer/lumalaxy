<template>
  <div class="Uploader">
    <input type="file" @change="onFileSelected" />
    <button @click="onUpload">Upload</button>
  </div>
</template>

<script lang="ts">
import "../VideoUtils.ts";

export default {
  name: "Uploader",
  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    onFileSelected(event: any) {
      console.log(event);
    },
    onUpload() {
      // Maybe send as Binary (?)
      return;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>