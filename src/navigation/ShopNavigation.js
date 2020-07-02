import 'react-native-gesture-handler';
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsOverview from '../screens/shop/ProductsOverviewScreen'
import ProductDetail from '../screens/shop/ProductDetailScreen'
import CartScreen from '../screens/shop/CartScreen'
import { Colors } from 'react-native/Libraries/NewAppScreen';

import Icon from 'react-native-vector-icons/FontAwesome';
const Stack = createStackNavigator();



const ShopNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="productOverview">
                <Stack.Screen name="productOverview" component={ProductsOverview} options={({ navigation }) => ({
                    headerStyle: {
                        backgroundColor: Colors.primary
                    },
                    headerRight: () => (
                        <Icon name="rocket" size={30} color="#900" onPress={() => navigation.navigate('cart')} />
                    )
                })} />
                <Stack.Screen name="productDetail" component={ProductDetail} />
                <Stack.Screen name="cart" component={CartScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ShopNavigation