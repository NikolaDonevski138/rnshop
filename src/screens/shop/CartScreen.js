import React from 'react'
import { View, Text, FlatList, Button, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import * as CartActions from '../../store/actions/cart'
import Colors from '../../constants/Colors'
import CartItem from '../../components/CartItem'
import * as MakeOrder from '../../store/actions/orders'

const CartScreen = props => {
    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    const dispatch = useDispatch()
    const orders = useSelector(state => state.order)

    console.log(orders, 'orderrss')



    const cartItems = useSelector(state => {
        const transformedCartItems = [];
        for (const key in state.cart.items) {
            transformedCartItems.push({
                productId: key,
                productTitle: state.cart.items[key].productTitle,
                productPrice: state.cart.items[key].productPrice,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum

            })
        }
        return transformedCartItems.sort((a, b) =>
            a.productId > b.productId ? 1 : -1
        )
    })


    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text styles={styles.summaryText}>
                    Total:
                <Text style={styles.amount}>{cartTotalAmount.toFixed}</Text>
                </Text>
                <Button
                    color={Colors.accent} title="Order Now" disabled={cartItems.length === 0}
                    onPress={() => dispatch(MakeOrder.addOrder(cartItems, cartTotalAmount))}
                />
            </View>
            <FlatList
                data={cartItems}
                keyExtractor={item => item.productId}
                renderItem={itemData => (
                    <CartItem
                        quantity={itemData.item.quantity}
                        title={itemData.item.title}
                        amount={itemData.item.sum}
                        onRemove={() => { dispatch(CartActions.removeFromCart(itemData.item.productId)) }}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        margin: 20
    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white'

    },
    summaryText: {
        fontSize: 18
    },
    amount: {
        color: Colors.primary
    },

})

export default CartScreen