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
    },
  },
  components: { PhotoItem },
};
</script>

<template>
<!-- <el-row :gutter="10">
  <el-col :xs="12" :sm="9" :md="8" :lg="5" :xl="3" v-for="photo in photoData" :key="photo.id">
    <PhotoItem :title="photo.title" :imageSrc="photo.thumbnailUrl" />
  </el-col>
</el-row> -->

  <el-scrollbar>
    <div class="scrollbar-flex-content">
      <p v-for="photo in photoData" :key="photo.id" class="scrollbar-demo-item">
        <PhotoItem :title="photo.title" :imageSrc="photo.thumbnailUrl" />
      </p>
    </div>
  </el-scrollbar>
</template>

<style scoped>
.scrollbar-flex-content {
  display: flex;
}
.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 300px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-danger-lighter);
  color: var(--el-color-danger);
}
</style>