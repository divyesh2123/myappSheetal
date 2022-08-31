import { Decrement, Increment } from "../consts/countercont"

export const IncrementData = () => ({
  type: Increment,

})

export const DecrementData = (payload) => ({
  type: Decrement,
  payload
})

