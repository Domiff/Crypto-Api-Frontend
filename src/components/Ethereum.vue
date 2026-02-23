<script setup>
    import { ref, onMounted } from "vue"
    import { ethAllData } from "@/services/api/ethereum.js"
    import IconEthereum from "@/components/icons/IconEthereum.vue"

    const ethereumAllData = ref([])
    const currencyName = ref("Ethereum")

    onMounted(async () => {
        ethereumAllData.value = await ethAllData()
    })
</script>

<template>
    <nav>
        <RouterLink to="/">Go to home</RouterLink>
        <RouterLink v-if="$route.fullPath === '/ethereum'" to="/bitcoin">Go to Bitcoin</RouterLink>
    </nav>

    <h1>{{ currencyName }}</h1>
    <IconEthereum />
    <h2>Data for all time</h2>

    <div class="price-list">
        <div class="price-row" v-for="eth in ethereumAllData">${{ eth.index_price }}</div>
    </div>
</template>

<style scoped>
    h1 {
        margin: 20px;
    }
</style>
