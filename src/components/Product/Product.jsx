import React from 'react';
import {Image, TouchableOpacity, Text} from 'react-native';
import styles from './Product.style';

const Product = (props) => {
    return (

        <TouchableOpacity style={styles.item_container}>
            <Image source={{uri: props.img}} style={styles.item_img}/>
            <Text style={styles.item_title}>{props.name}</Text>
            <Text style={props.inStock ? styles.item_price : styles.item_price_canceled}>{props.price}</Text>
            {!props.inStock && <Text style={styles.item_stock_info}>Stokta yok</Text>}
        </TouchableOpacity>

    );
};

export default Product;
