import { configureStore } from '@reduxjs/toolkit'
import CartReducer from '../feature/CartSlice'



export const store = configureStore({
  reducer: {
    cart:CartReducer
  },
})