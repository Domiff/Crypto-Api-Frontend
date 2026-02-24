import axios from "axios"
import { urls } from "./urls.js"

const urlEth = "?ticker=eth"

async function ethAllData() {
    const data = await axios.get(urls.urlBase + urls.urlAllPrices + urlEth)
    return data.data.reverse()
}

async function ethLastData() {
    const data = await axios.get(urls.urlBase + urls.urlLastPrice + urlEth)
    return data.data
}

export { ethAllData, ethLastData }
