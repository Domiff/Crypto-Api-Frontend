<script setup>
    import { onMounted, ref } from "vue"
    import { btcAllData } from "@/services/api/bitcoin.js"
    import IconBitcoin from "@/components/icons/IconBitcoin.vue"

    const bitcoinAllData = ref([])
    const currencyName = ref("Bitcoin")

    onMounted(async () => {
        bitcoinAllData.value = await btcAllData()
    })
</script>

<template>
    <nav>
        <RouterLink to="/">Go to home</RouterLink>
        <RouterLink v-if="$route.fullPath === '/bitcoin'" to="/ethereum">Go to Ethereum</RouterLink>
    </nav>

    <h1>{{ currencyName }}</h1>
    <IconBitcoin />
    <h2>Data for all time</h2>

    <div class="price-list">
        <div class="price-row" v-for="btc in bitcoinAllData">${{ btc.index_price }}</div>
    </div>
</template>

<style scoped>
    h1 {
        margin: 20px;
    }
</style>
