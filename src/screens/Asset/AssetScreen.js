import React, { useState } from "react";

import {
    View,
    ScrollView,
	StyleSheet,
	Image,
	Platform,
	Switch,
	Alert,
    TouchableOpacity,
  } from 'react-native'

import {
  Layout,
  TopNav,
  Text,
  themeColor,
  useTheme,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

import { IconButton } from 'react-native-paper';
import { Dimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

export default function ({ navigation }) {
  
  const { isDarkmode } = useTheme();

  const [width, setWidth] = useState('');
 
  const [height, setHeight] = useState('');
  var imageURL = 'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg';

  ///
  const getImageDimensions = () => {
 
    Image.getSize(imageURL, (Width, Height) => {
      setWidth(Width);
      setHeight(Height);
 
    }, (errorMsg) => {
      console.log(errorMsg);
 
    });
 
  }

  getImageDimensions();
  
  
const win = Dimensions.get('window');
  const ratio = win.width/600;
  
  return (
    
     
      <View style={[styles.container,{backgroundColor:isDarkmode ? "#191921" : themeColor.white100}]}>
          <ScrollView >
      <View style={[styles.asset,{backgroundColor:isDarkmode ? "#262834" : "#ffffff"}]}>

      <View style={{
     flexDirection:'row',
        marginTop:40,
     justifyContent:'space-between',
}}>
<IconButton
    style={styles.chevronBack}
      icon= "arrow-left"
      color={isDarkmode ? themeColor.white100 : "black"}
      size={30}
      onPress={() => navigation.goBack() }
    />

<IconButton
    style={styles.star}
      icon= "star-outline"
      color='#fcba03'
      size={30}
      onPress={() => navigation.goBack() }
    />
</View>
      <TouchableOpacity onPress={()=>navigation.navigate("AssetLoupeScreen") }>
      <Image
        style={{width: win.width-40,
            height: 362 * ratio,
            marginBottom:40,
            marginLeft:20,
            marginTop:10,
            marginRight:20,
        }}
        source={{
          uri: imageURL,
        }}
      />
</TouchableOpacity>

        </View>
        <View style={styles.info}>
        
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        </View>


        </ScrollView>
      </View>
      
  );
}

const styles = StyleSheet.create({

	container:{
        flex: 1,
        
    },
    asset:{
        
        justifyContent:'center',
        
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
    },
    image:{
        
    },
    chevronBack:{
        marginLeft:20,
    },
    star:{
        marginRight:20,
    },
    info:{

    },
    zoom:{

    },

  })