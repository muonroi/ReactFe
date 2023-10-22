import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './cartSlide'
import userReducer from './userSlide'
export default configureStore ({
    reducer: {
        cart: cartReducer,
        user: userReducer
    }
});