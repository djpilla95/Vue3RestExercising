<script>
import PhotoItem from "./PhotoItem.vue";

const API_URL = `https://jsonplaceholder.typicode.com`;

export default {
  data: () => ({
    photoData: "",
  }),
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const url = `${API_URL}/albums/1/photos`;
      this.photoData = await (await fetch(url)).json();
      console.log(this.photoData);
    },
  },
  components: { PhotoItem },
};
</script>

<template>
<el-row :gutter="10">
  <el-col :xs="12" :sm="9" :md="8" :lg="5" :xl="3" v-for="photo in photoData" :key="photo.id">
    <PhotoItem :title="photo.title" :imageSrc="photo.thumbnailUrl" />
  </el-col>
</el-row>
</template>