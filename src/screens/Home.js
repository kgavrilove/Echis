import React from "react";
import { View, Linking ,Alert, Image, StyleSheet} from "react-native";
import { getAuth, signOut } from "firebase/auth";
import {
  Layout,

  Text,
  TopNav,
  Section,
  SectionContent,
  useTheme,
  
} from "react-native-rapi-ui";


import AssetTable from './AssetTable';
const fontFamily =  'Avenir' 

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  const auth = getAuth();

  const data = [
    { label: "name of asset", value: 1 , date: "01.11.2020",favorite:1/* ... */ },
    { label: "name of asset", value: 2 , date: "01.11.2020",favorite:0/* ... */ },
    { label: "name of asset", value: 3 , date: "01.11.2020",favorite:0/* ... */ },
    { label: "name of asset", value: 4 , date: "01.11.2020",favorite:0/* ... */ },
    { label: "name of asset", value: 5 , date: "01.11.2020",favorite:1/* ... */ },
    { label: "name of asset", value: 1 , date: "01.11.2020",favorite:0/* ... */ },
    { label: "name of asset", value: 2 , date: "01.11.2020",favorite:1/* ... */ },
    { label: "name of asset", value: 3 , date: "01.11.2020",favorite:0/* ... */ },
    { label: "name of asset", value: 4 , date: "01.11.2020",favorite:1/* ... */ },
    { label: "name of asset", value: 5 , date: "01.11.2020",favorite:0/* ... */ },
    { label: "name of asset", value: 1 , date: "01.11.2020",favorite:1/* ... */ },
    { label: "name of asset", value: 2 , date: "01.11.2020",favorite:0/* ... */ },
    { label: "name of asset", value: 3 , date: "01.11.2020",favorite:1/* ... */ },
    { label: "name of asset", value: 4 , date: "01.11.2020",favorite:0/* ... */ },
    { label: "name of asset", value: 5 , date: "01.11.2020",favorite:0/* ... */ },
    { label: "name of asset", value: 1 , date: "01.11.2020",favorite:0/* ... */ },
    { label: "name of asset", value: 2 , date: "01.11.2020",favorite:0/* ... */ },
    { label: "name of asset", value: 3 , date: "01.11.2020",favorite:0/* ... */ },
    { label: "name of asset", value: 4 , date: "01.11.2020",favorite:1/* ... */ },
    { label: "name of asset", value: 5 , date: "01.11.2020",favorite:1/* ... */ },
    /* ... */
  ];


  return (
    <Layout>
      <View
        style={{
          flex: 1,
        
          
        }}
      >
        <AssetTable
        data={data}
        styles={styles}
        ></AssetTable>
      </View>
    </Layout>
  );
}
const styles = StyleSheet.create({
	tinyLogo:{
      width:50,
      height:75,
  },
item:{
  
  marginLeft:20,
  marginRight:20,
},
itemTitle:{
  fontFamily,
},
itemDesc:{
  fontFamily,
},
itemStar:{
  alignSelf:'center',
		
		marginLeft: 20,
}
	  
  })
  