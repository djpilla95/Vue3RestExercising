<script>
import Post from "./Post.vue";

const API_URL = `https://jsonplaceholder.typicode.com`;

export default {
  data: () => ({
    postData: "",
  }),
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const url = `${API_URL}/posts`;
      this.postData = await (await fetch(url)).json();
    },
  },
  components: { Post },
};
</script>
<template>
  <el-scrollbar height="40em">
    <p v-for="post in postData" :key="post.id" class="scrollbar-demo-item">
        <Post :title="post.title" :body="post.body" :id="post.id" :userId="post.userId" />
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