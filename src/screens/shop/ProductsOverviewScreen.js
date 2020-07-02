import React from 'react'
import { Text, View, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import ProductItem from '../../components/ProductItem'
import * as cartActions from '../../store/actions/cart'
const ProductsOverview = ({ navigation }) => {
    const products = useSelector(state => state.products.availableProducts)
    const dispatch = useDispatch()

    // const selec = useSelector(state => state.cart.items)
    // console.log(selec, 'selec')

    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <ProductItem
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onViewDetail={() => {
                        navigation.navigate('productDetail', {
                            productId: itemData.item.id,
                            productTitle: itemData.item.title
                        })
                    }}
                    onAddToCart={() => dispatch(cartActions.addToCart(itemData.item))}
                />
            )}
        />
    )
}

export default ProductsOverview