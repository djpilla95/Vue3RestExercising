<script setup>
import Post from "./Post.vue";
import { onMounted, inject, ref } from "vue";

const postData = ref(null)
const API_URL = inject("JSON_PLACEHOLDER_API")

onMounted(async () => {
  if(!postData.value) {
    await fetchPostData()
  }
});

async function fetchPostData() {
  const url = `${API_URL}/posts`;
  postData.value = await (await fetch(url)).json();
}
</script>
<template>
  <el-scrollbar height="40em">
    <p v-for="post in postData" :key="post.id" class="scrollbar-demo-item">
      <Post
        :title="post.title"
        :body="post.body"
        :id="post.id"
        :userId="post.userId"
      />
    </p>
  </el-scrollbar>
</template>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10em;
  width: auto;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-7);
  color: var(--el-color-primary);
}
</style>