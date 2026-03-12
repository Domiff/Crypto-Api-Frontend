<script setup>
    import {ref} from "vue"
    import {VueDatePicker} from "@vuepic/vue-datepicker"
    import '@vuepic/vue-datepicker/dist/main.css'
    import "@/assets/datepicker.css"

    const date = ref()
</script>

<template>
    <VueDatePicker v-model="date" />
</template>
