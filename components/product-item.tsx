import { View, StyleSheet, Image, Button, Text } from 'react-native'
import { Product } from '../types/Products'

type Props ={
  product:  Product
}
export const ProductItem = (props: Props) => {
  const handleAddToCart = () => {
    alert("Você está comprando:" +props.product.name)


  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: props.product.image}}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{props.product.name} </Text>
        <Text style={styles.price}>R$ {props.product.price.toFixed(2)} reais </Text>
        <Button
          title= "Comprar"
          onPress= {handleAddToCart}
        />

      </View>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flexDirection:'row',
    marginBottom: 10,
    

  },
  image: {
    
    width:100,
    height: 150,
    borderRadius: 10,
    
  },
  info:{
    flex: 1,
    backgroundColor: '#FFF0F5',
    padding: 10,
    borderTopEndRadius: 10,
    borderBottomRightRadius: 10,

  },
  name: {
    fontWeight: 'bold',
    fontSize: 21,
    marginBottom: 10
  },
  price: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10

  }

})










