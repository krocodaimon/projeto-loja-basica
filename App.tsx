import{ View, SafeAreaView, StatusBar, StyleSheet, Image, Text, FlatList} from 'react-native'

import { list } from './data'
import { ProductItem } from './components/product-item'
import { Product } from './types/Products'

function App(){
  return (
    <SafeAreaView style={styles.container}>
      <Image 
        source={require('./assets/tit-paranormal.png')}
        resizeMode="cover"
        style={styles.imagemTittle}
        />
        <View style={styles.area}>
          <Text style={styles.h1}> PRODUTOS </Text>
          <FlatList
            data={list}
            renderItem={({item}: { item: Product }) => 
              (<ProductItem product={item} />
              )}
            keyExtractor= {item => item.id.toString()}
          />
        </View>
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#FFE4E1',
  },
  imagemTittle: {
    width:'100%',
    height: 120,
    
  },
  area: {
    padding: 20,
    
  
  },
  h1: {
    fontSize: 25,
    marginBottom: 20,
    fontFamily: 'courian',
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    color: '#363636',
   
   
   


    
  }
})

export default App;
