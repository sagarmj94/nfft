/** @format */

import { NFT_LOAD_START } from "../index"
import { NFT_LOAD_SUCCESS } from "../index"
import { NFT_LOAD_ERROR } from "../index"

const nftLoadStart = () => ({
    type: NFT_LOAD_START,
})

const nftLoadSucess = (nfts) => ({
    type: NFT_LOAD_SUCCESS,
    payload: nfts,
})
const nftLoadError = (error) => ({
    type: NFT_LOAD_ERROR,
    payload: error,
})

export default {
    nftLoadStart,
    nftLoadSucess,
    nftLoadError,
}
