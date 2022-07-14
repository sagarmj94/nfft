// import {
//   walletConnectRequest,
//   walletConnectRequestSuccess,
//   walletConnectRequestError,
// } from "../redux/actions/WalletActions";
// import Web3 from "web3";
// export const onClickMetaMaskWallet =  () => {
//   return async (dispatch) => {
//     dispatch(walletConnectRequest());

//     let data = await window.ethereum.request({
//       method: "wallet_requestPermissions",
//       params: [
//         {
//           eth_accounts: {},
//         },
//       ],
//     });

//     if (data) {
//       dispatch(
//         walletConnectRequestSuccess({
//           address: window.ethereum.selectedAddress,
//           balence: 0,
//         })
//       );
//     }else{
//         dispatch(walletConnectRequestError("err"))
//     }

//     // if (window.ethereum) {
//     //   if (window.ethereum.selectedAddress) {
//     //     window.web3.eth.getBalance(
//     //       window.ethereum.selectedAddress,
//     //       function (err, result) {
//     //         if (err) {
//     //           dispatch(walletConnectRequestError(err));
//     //         } else {
//     //           dispatch(
//     //             walletConnectRequestSuccess({
//     //               address: window.ethereum.selectedAddress,
//     //               balence: window.web3.utils.fromWei(result, "ether"),
//     //             })
//     //           );
//     //         }
//     //       }
//     //     );
//     //   }
//     // }
//     // const ethEnabled = () => {
//     //   if (window.ethereum) {
//     //     dispatch(walletConnectRequest());
//     //     window.web3 = new Web3(window.ethereum);
//     //     window.ethereum.enable();
//     //     //setAddr(window.ethereum.selectedAddress);
//     //     if (window.ethereum.selectedAddress) {
//     //       window.web3.eth.getBalance(
//     //         window.ethereum.selectedAddress,
//     //         function (err, result) {
//     //           if (err) {
//     //             dispatch(walletConnectRequestError(err));
//     //           } else {
//     //             // setUserBal(window.web3.utils.fromWei(result, "ether"));
//     //             // let data = {
//     //             //   address: window.ethereum.selectedAddress,
//     //             //   balence: window.web3.utils.fromWei(result, "ether"),
//     //             // };

//     //             dispatch(
//     //               walletConnectRequestSuccess({
//     //                 address: window.ethereum.selectedAddress,
//     //                 balence: window.web3.utils.fromWei(result, "ether"),
//     //               })
//     //             );
//     //           }
//     //         }
//     //       );
//     //     }
//     //     return true;
//     //   }
//     //   return false;
//     // };
//     // if (!ethEnabled()) {
//     //   alert(
//     //     "Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!"
//     //   );
//     // } else {
//     //   localStorage.setItem("wallet-header", "metamask");
//     //   localStorage.removeItem("connected");
//     //   localStorage.setItem("connected", "true");
//     // }
//   };
// };
