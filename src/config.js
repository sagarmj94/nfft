// import rounds from "./abi/rounds.json";
// const config = {
//   tokenContract: {
//     web3Endpoint: "https://data-seed-prebsc-1-s1.binance.org:8545",
//     contractAddress: "0x0b003B61f6a10F58A76554F4B1FB4910052Ba493",
//     contractABI: rounds,
//     chainID: 97,
//   },
// };

// export default config;

import rounds from "./abi/rounds.json";
const config = {
  tokenContract: {
    web3Endpoint: "https://bsc-dataseed.binance.org",
    // contractAddress: "0x61c31fe9f2f3f26c09952ce568155bcefb50f163",
    contractAddress: "0xd4580D6c04Cd567b3aD51E47DfF34756abFEBDD2",
    contractABI: rounds,
    Chain: "BSC",
    chainID: 56,
  },
};


export default config;