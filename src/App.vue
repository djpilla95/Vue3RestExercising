<script setup>
import PostFeed from "./components/Posts/PostFeed.vue";
</script>

<template>
  <header>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
  </header>

  <main>
    <!-- <PhotoViewer /> -->
    <el-row :gutter="20">
      <PostFeed />
    </el-row>
  </main>
</template>
