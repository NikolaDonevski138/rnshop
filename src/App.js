import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import Products from './store/reducers/products'
import CartItems from './store/reducers/cart'
import ShopNavigation from './navigation/ShopNavigation'
import Orders from './store/reducers/orders'

const rootReducer = combineReducers({
    products: Products,
    cart: CartItems,
    order: Orders
})

const store = createStore(rootReducer)

const App = () => {
    return (
        <Provider store={store}>
            <ShopNavigation />
        </Provider>
    )
}

export default App