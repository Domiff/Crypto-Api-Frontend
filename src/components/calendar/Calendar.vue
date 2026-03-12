<script setup>
    import {ref, watch} from "vue"
    import {VueDatePicker} from "@vuepic/vue-datepicker"
    import '@vuepic/vue-datepicker/dist/main.css'

    const date = ref()
    const emit = defineEmits(['response'])

    watch(date, (newDate) => {
        emit('response', newDate.value)
    })
</script>

<template>
    <div class="calendar-datepicker">
        <VueDatePicker v-model="date" />
    </div>
</template>

<style scoped>
    .calendar-datepicker :deep(.dp__theme_dark) {
        --dp-background-color: var(--card);
        --dp-text-color: var(--text);
        --dp-border-color: var(--border);
        --dp-hover-color: rgba(255, 255, 255, 0.06);
        --dp-primary-color: var(--accent);
        --dp-primary-text-color: #fff;
        --dp-time-font-size: 28px;
        --dp-overlay-height: auto;
    }

    .calendar-datepicker :deep(.dp__input) {
        background: var(--card);
        border: 1px solid var(--border);
        color: var(--text);
        border-radius: 10px;
        padding: 10px 14px;
        max-width: 260px;
    }

    .calendar-datepicker :deep(.dp__input::placeholder) {
        color: var(--muted);
    }

    .calendar-datepicker :deep(.dp__input:focus) {
        border-color: var(--accent);
        box-shadow: 0 0 0 1px rgba(138, 180, 248, 0.35);
    }

    .calendar-datepicker :deep(.dp__menu) {
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: 14px;
        color: var(--text);
        padding: 10px 12px 12px;
        box-shadow: 0 18px 45px rgba(0, 0, 0, 0.4);
    }

    .calendar-datepicker :deep(.dp__week_day) {
        color: var(--muted);
        font-size: 11px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
    }

    .calendar-datepicker :deep(.dp__cell_inner) {
        color: var(--text);
        border-radius: 8px;
    }

    .calendar-datepicker :deep(.dp__cell_inner:hover),
    .calendar-datepicker :deep(.dp__month_year_col_nav:hover),
    .calendar-datepicker :deep(.dp__tp_arrow_btn:hover),
    .calendar-datepicker :deep(.dp__time_col_reg:hover) {
        background: rgba(255, 255, 255, 0.06);
    }

    .calendar-datepicker :deep(.dp__active_date),
    .calendar-datepicker :deep(.dp__active) {
        background: linear-gradient(135deg, var(--accent), var(--accent2));
        color: #fff;
    }

    .calendar-datepicker :deep(.dp__today) {
        border: 1px solid var(--accent2);
    }

    .calendar-datepicker :deep(.dp__cell_disabled) {
        opacity: 0.35;
    }

    .calendar-datepicker :deep(.dp__time_picker) {
        background: #060811;
        border-top: 1px solid var(--border);
    }

    .calendar-datepicker :deep(.dp__time_display) {
        color: var(--muted);
        border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        font-size: 24px !important;
    }

    .calendar-datepicker :deep(.dp__time_col),
    .calendar-datepicker :deep(.dp__time_col_reg) {
        color: var(--text);
        font-size: 24px !important;
    }

    .calendar-datepicker :deep(.dp__time_separator) {
        color: var(--accent2);
    }

    .calendar-datepicker :deep(.dp__menu ::-webkit-scrollbar) {
        width: 6px;
    }

    .calendar-datepicker :deep(.dp__menu ::-webkit-scrollbar-thumb) {
        background: var(--border);
        border-radius: 6px;
    }
</style>
