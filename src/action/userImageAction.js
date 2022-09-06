import { ImageErro, ImageRequest, ImageSucc } from "../consts/userImageConst"

export const RequestImageAction = () => ({
  type: ImageRequest,
  
})

export const RequestSuc = (payload) => ({
  type: ImageSucc,
  payload
})

export const RequestError = (payload) => ({
  type: ImageErro,
  payload
})


