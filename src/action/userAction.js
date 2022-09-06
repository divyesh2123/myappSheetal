import { GetUserData } from "../consts/userConst";

export const UserAction = (payload) => ({
  type: GetUserData,
  payload
})
