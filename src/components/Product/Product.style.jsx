import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    item_container: {
        flex: 1,
        margin: 3,
        backgroundColor: '#e7ebee',
        padding: 15,
        flexDirection: 'column',
      },
      item_img: {
        width: '100%',
        height: 200,
        backgroundColor: 'white',
        resizeMode: 'contain',
      },
      item_title: {
        fontSize: 18,
        fontWeight: '500',
        marginTop: 10,
      },
      item_price: {
        fontSize: 17,
        marginTop:5,
      },
      item_price_canceled: {
        fontSize: 17,
        marginTop:5,
        textDecorationLine:'line-through',
      },
      item_stock_info: {
        fontSize: 17,
        fontWeight:'bold',
        color: 'red',
      },

});

export default styles;
