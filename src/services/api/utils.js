function formatDate(date) {
    const y = date.getFullYear()
    const m = String(date.getMonth() + 1).padStart(2, "0")
    const d = String(date.getDate()).padStart(2, "0")
    const h = String(date.getHours()).padStart(2, "0")
    const min = String(date.getMinutes()).padStart(2, "0")

    return `${y}-${m}-${d} ${h}:${min}`
}

function buildUrl(urlBase, urlMain, ticker, start, end) {
    const formatedStart = encodeURIComponent(formatDate(start))
    const formatedEnd = encodeURIComponent(formatDate(end))

    return `${urlBase}${urlMain}${ticker}&start_date=${formatedStart}&end_date=${formatedEnd}`
}

export { buildUrl }
