<script setup>
defineProps({
  imageSrc: URL,
  title: String,
});
</script>

<template>
  <div>
    <h3>{{ title }}</h3>
    <img alt="{{ title }}" :src="imageSrc" />
  </div>
</template>
