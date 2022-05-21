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

import { List,IconButton } from 'react-native-paper';
import BigList from "react-native-big-list";
import Icon from 'react-native-vector-icons/Entypo'
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

  function checkFavorite(val){
    if(val==1){
     return "star"
    }else{
      return "star-outline"
    }
  }

  function changeFavoriteValue(val){
    Alert.alert('ddd'+ val)
    console.log(data[0])
    if(val==1){
     
      return 0
     }else{
      
       return 1
     }
  }

  const renderItem = ({ item, index }) => (
    <List.Item
    style={styles.item}
    titleStyle={styles.itemTitle}
    descriptionStyle={styles.itemDesc}
    title={item.label}
    description={item.date}
    
    right={props =><IconButton
    style={styles.itemStar}
      icon= { checkFavorite(item.favorite)}
      color='#fcba03'
      size={22}
      onPress={() => item.favorite=changeFavoriteValue(item.favorite)}
    />
    
    }
    left={props => <Image
      style={styles.tinyLogo}
      source={{
        uri: 'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
      }}
    />}
    onPress={() => Alert.alert('Current version is not support this function')}
  />
  );
  const renderEmpty = () => <Text>Empty</Text>;
  const renderHeader = () => <Text style={{backgroundColor:'red'}}>Header</Text>;
 

  return (
    <Layout>
      <View
        style={{
          flex: 1,
        
          
        }}
      >
         <BigList
    data={data}
    renderItem={renderItem}
    renderEmpty={renderEmpty}
    renderHeader={renderHeader}
   
    itemHeight={85} // Required (default 0)
    headerHeight={90} // Required to show header
    footerHeight={100} // Required to show footer
  />
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
  