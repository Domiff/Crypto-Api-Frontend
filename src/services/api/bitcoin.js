import axios from "axios"
import { urls } from "./urls.js"

const urlBtc = "?ticker=btc"

async function btcAllData() {
    const data = await axios.get(urls.urlBase + urls.urlAllPrices + urlBtc)
    return data.data.reverse()
}

async function btcLastData() {
    const data = await axios.get(urls.urlBase + urls.urlLastPrice + urlBtc)
    return data.data
}

export { btcAllData, btcLastData }
