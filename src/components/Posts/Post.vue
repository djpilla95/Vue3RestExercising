<script setup>
import { Delete, View } from "@element-plus/icons-vue";

defineProps({
    userId: Number,
    Id: Number,
    title: String,
    body: String,
});
</script>

<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>{{ title }}</span>
            </div>
        </template>
        <div class="text item">{{ body }}</div>
        <el-button type="danger">
            <el-icon>
                <Delete />
            </el-icon>
            <span style="vertical-align: middle">Delete</span>
        </el-button>
        <el-button type="primary">
            <el-icon><View /></el-icon>
            <span style="vertical-align: middle">View More</span>
        </el-button>
    </el-card>
</template>

<style scoped>
.box-card {
    width: 800px;
}
</style>
