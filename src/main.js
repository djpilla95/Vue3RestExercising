import { createApp } from "vue"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from "./App.vue"
import { createRouter, createWebHistory } from 'vue-router'
import Post from "./components/Posts/Post.vue"

const routes = [
    { path: '/', component: App},
    { path: '/post/:id', component: Post }
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })


const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.use(router)
app.provide('JSON_PLACEHOLDER_API', 'https://jsonplaceholder.typicode.com')
app.mount("#app")
