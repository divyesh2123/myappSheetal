import { GetUserData } from "../consts/userConst"

const initialState = {

    data : []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case GetUserData:
    return { ...state, data :payload };

  default:
    return state
  }
}
