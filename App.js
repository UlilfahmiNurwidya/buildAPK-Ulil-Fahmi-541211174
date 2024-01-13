import React from 'react';
import {View, ScrollView, Dimensions, Text, Image, Linking, TouchableOpacity, TextInput} from 'react-native';

const {width, height} = Dimensions.get('screen');
const ig = () => {
  Linking.openURL('https://www.instagram.com/ullfhm/');
}

const porto = () => {
  return (
    <ScrollView>
    <View style={{backgroundColor:'white'}}>
      <View style={{backgroundColor:'grey', height:width*0.2, width:width*0.8, borderBottomRightRadius:40}}>
        <Text style={{textAlign:'center', textAlignVertical:'center', flex:1, fontWeight: 'bold', fontSize:25, color:'lightblue'}}>Portofolio</Text>
      </View>
      <View style={{alignItems:'center', padding:20}}>
        <Image
          source={require('./assets/bolobolo.jpg')}
          style={{height:width*0.7, width:width*0.7, borderRadius:40}}
        />
      </View>
      <View style={{alignItems:'center'}}>
        <Text style={{fontWeight:'bold', fontSize:20}}>Ulil Fahmi Nurwidya</Text>
        <Text style={{fontSize:15, textAlign:'center', paddingHorizontal:20}}>Saya Ulil Fahmi Nurwidya saya belajar dI SMK Telkom Purwokerto, saya masuk di jurusan RPL dan saya berada di kelas XII RPL 5.Saya berasal dari Banyumas</Text>
      </View>
      <View style={{marginTop:20, backgroundColor:'lightblue', height:width*0.14, width:width*0.4, borderTopRightRadius:20, borderBottomRightRadius:20}}>
        <Text style={{textAlign:'center', textAlignVertical:'center', flex:1, fontWeight: 'bold', fontSize:20, color:'blue'}}>Kontak</Text>
      </View>
      <View style={{height:10}}>
      </View>
      <View style={{alignItems:'center'}}>
      <TouchableOpacity onPress={ig}>
      <View style={{flexDirection:'row', backgroundColor:'pink', width:width*0.4, height:width*0.1, alignItems:'center', justifyContent:'center', borderRadius:10}}>
        <View>
          <Image
            source={require('./assets/ig.png')}
            style={{height:width*0.07, width:width*0.07}}
          />
        </View>
          <Text style={{fontWeight:'bold',fontSize:12, textAlignVertical:'center', paddingLeft:10}}>instagram</Text>
        <View>
        </View>
      </View>
      <View style={{height:10}}>
      </View>
      </TouchableOpacity>

      </View>
      
      <View style={{height:20}}>
      </View>



      <View style={{backgroundColor:'lightblue', height:width*0.14, width:width*0.4, borderTopRightRadius:20, borderBottomRightRadius:20}}>
        <Text style={{textAlign:'center', textAlignVertical:'center', flex:1, fontWeight: 'bold', fontSize:20, color:'blue'}}>Projek Ku</Text>
      </View>
      
      <View style={{backgroundColor:'grey', height:width*0.4, width:width*0.8, alignSelf: 'center', marginTop:10, borderRadius:20}}>
      <Image
          source={require('./assets/kalkulator.png')}
          style={{height:width*0.38, width:width*0.785, borderRadius:10}}
        />
      </View>
      <Text style={{alignSelf:'center', fontSize:12, fontWeight:'bold'}}>Kalkulator online</Text>

      <View style={{alignItems:'center'}}>
      <TextInput
      
      placeholder='Kritik dan Saran'
      
      style={{textAlign:'center',borderColor:'black', height:width*0.15,width:width*0.8,borderRadius:10, borderWidth:1}}
      />
      </View>

    </View>
    <View style={{height:20}}>
    </View>
    </ScrollView>
  )
}

export default porto;