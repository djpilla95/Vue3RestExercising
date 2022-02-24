<script setup>
import { Delete, View } from "@element-plus/icons-vue"
import { inject } from "@vue/runtime-core";

const props = defineProps({
    userId: Number,
    id: Number,
    title: String,
    body: String,
});

const apiUrl = inject('JSON_PLACEHOLDER_API')

async function deletePost() {
    console.log('props', props.id);
    const url = `${apiUrl}/posts/`;
    const response = await fetch(url + props.id, {
        method: 'DELETE',
    }).then(() => alert(`Delete would have been a success for post Id: ${props.id}`))
}
</script>

<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>{{ props.title }}</span>
            </div>
        </template>
        <div class="text item">{{ props.body }}</div>
        <el-button @click="deletePost" type="danger">
            <el-icon>
                <Delete />
            </el-icon>
            <span style="vertical-align: middle">Delete</span>
        </el-button>
        <router-link :to="`/path/${props.id}`"><el-button type="primary">
            <el-icon>
                <View />
            </el-icon>
            <span style="vertical-align: middle">View More</span>
        </el-button></router-link>

    </el-card>
</template>

<style scoped>
.box-card {
    width: 800px;
}
</style>
