import axios from "axios"
import { urls } from "./urls.js"
import { buildUrl } from "@/services/api/utils.js"

const urlEth = "?ticker=eth"

async function ethAllData() {
    const data = await axios.get(urls.urlBase + urls.urlAllPrices + urlEth)
    return data.data.reverse()
}

async function ethLastData() {
    const data = await axios.get(urls.urlBase + urls.urlLastPrice + urlEth)
    return data.data
}

async function ethFilteredData(start, end) {
    const url = buildUrl(urls.urlBase, urls.urlDateFilter, urlEth, start, end)
    const data = await axios.get(url)
    return data.data.reverse()
}

export { ethAllData, ethLastData, ethFilteredData }
