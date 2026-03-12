<script setup>
    import { ref, onMounted } from "vue"
    import { ethAllData, ethLastData, ethFilteredData } from "@/services/api/ethereum.js"
    import IconEthereum from "@/components/icons/IconEthereum.vue"
    import Calendar from "@/components/calendar/Calendar.vue"

    const currencyName = "Ethereum"

    const ethereumAllData = ref([])
    const ethereumLastData = ref("")
    const ethereumFilteredData = ref([])

    const startDate = ref(null)
    const endDate = ref(null)

    function setStart(date) {
        startDate.value = date
    }

    function setEnd(date) {
        endDate.value = date
    }

    const sendData = async () => {
        if (!startDate.value || !endDate.value) {
            return
        }
        ethereumFilteredData.value = await ethFilteredData(startDate.value, endDate.value)
    }

    onMounted(async () => {
        ethereumAllData.value = await ethAllData()
        ethereumLastData.value = await ethLastData()
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
        <div class="price-row" v-for="eth in ethereumAllData" :key="eth.id">
            ${{ eth.index_price }}
        </div>
    </div>

    <h2>Last data</h2>
    <div class="price-list">
        <div class="price-row">${{ ethereumLastData.index_price }}</div>
    </div>

    <h2>Date filtered data</h2>
    <div class="calendar">
        <Calendar v-on:start="setStart" />
        <button v-on:click="sendData">Send</button>
        <Calendar v-on:end="setEnd" />
    </div>

    <div class="price-list">
        <div class="price-row" v-for="eth in ethereumFilteredData" :key="eth.id">
            ${{ eth.index_price }}
        </div>
    </div>
</template>

<style scoped>
    h1 {
        margin: 20px;
    }
    .calendar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        text-align: center;
        align-items: center;
        gap: 16px;
    }
    .calendar button {
        padding: 10px 22px;
        border-radius: 999px;
        border: 1px solid var(--border);
        background: linear-gradient(135deg, var(--accent), var(--accent2));
        color: #0b0f1a;
        font-weight: 500;
        font-size: 15px;
        cursor: pointer;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.45);
        transition:
            transform 0.15s ease,
            box-shadow 0.15s ease,
            opacity 0.15s ease;
    }
    .calendar button:hover {
        transform: translateY(-1px);
        box-shadow: 0 14px 30px rgba(0, 0, 0, 0.55);
    }
    .calendar button:active {
        transform: translateY(0);
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
        opacity: 0.9;
    }
</style>
