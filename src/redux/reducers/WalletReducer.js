import {
  WALLET_CONNECT_REQUEST,
  WALLET_CONNECT_REQUEST_SUCCESS,
  WALLET_CONNECT_REQUEST_ERROR,
} from "../index";
const initialState = {
  isLoading: false,
  userData: {
    address: "",
    balance: "",
  },
  IsError: "",
};

const WalletReducer = (state = initialState, action) => {
  switch (action.type) {
    case WALLET_CONNECT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case WALLET_CONNECT_REQUEST_SUCCESS:
      return {
        isLoading: false,
        userData: action.payload,
        IsError: "",
      };

    case WALLET_CONNECT_REQUEST_ERROR:
      return {
        isLoading: false,
        userData: {
          address: "",
          balance: "",
        },
        IsError: action.payload,
      };
    default:
      return state;
  }
};
export default WalletReducer;
