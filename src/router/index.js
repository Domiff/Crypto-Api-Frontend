import { createRouter, createWebHistory } from "vue-router"
import HomePage from "@/components/HomePage.vue"
import Bitcoin from "@/components/Bitcoin.vue"
import Ethereum from "@/components/Ethereum.vue"

const routes = [
    { path: "/", component: HomePage },
    { path: "/bitcoin", component: Bitcoin },
    { path: "/ethereum", component: Ethereum },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
