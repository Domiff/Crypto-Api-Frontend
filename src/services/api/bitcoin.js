import axios from "axios"
import { urls } from "./urls.js"
import { buildUrl } from "@/services/api/utils.js"

const urlBtc = "?ticker=btc"

async function btcAllData() {
    const data = await axios.get(urls.urlBase + urls.urlAllPrices + urlBtc)
    return data.data.reverse()
}

async function btcLastData() {
    const data = await axios.get(urls.urlBase + urls.urlLastPrice + urlBtc)
    return data.data
}

async function btcFilteredData(start, end) {
    const url = buildUrl(urls.urlBase, urls.urlDateFilter, urlBtc, start, end)
    const data = await axios.get(url)
    return data.data.reverse()
}

export { btcAllData, btcLastData, btcFilteredData }
