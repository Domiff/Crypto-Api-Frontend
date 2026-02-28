<script setup>
    import { onMounted, ref } from "vue"
    import { btcAllData, btcLastData } from "@/services/api/bitcoin.js"
    import IconBitcoin from "@/components/icons/IconBitcoin.vue"

    const bitcoinAllData = ref([])
    const currencyName = "Bitcoin"
    const bitcoinLastData = ref("")

    onMounted(async () => {
        bitcoinAllData.value = await btcAllData()
        bitcoinLastData.value = await btcLastData()
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
        <div class="price-row" v-for="btc in bitcoinAllData" :key="btc.id">
            ${{ btc.index_price }}
        </div>
    </div>

    <h2>Last data</h2>
    <div class="price-list">
        <div class="price-row">${{ bitcoinLastData.index_price }}</div>
    </div>
</template>

<style scoped>
    h1 {
        margin: 20px;
    }
</style>
