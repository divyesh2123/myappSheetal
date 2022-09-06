import { ImageErro, ImageRequest, ImageSucc } from "../consts/userImageConst"

const initialState = {
    data : [],
    error : null,
    isLoadding: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case ImageRequest:
    return { ...state, isLoadding : true };

  case ImageSucc:
    return {...state, isLoadding: false, data : payload};

  case ImageErro:
    return {...state, isLoadding: false, error : payload};

   

  default:
    return state
  }
}
