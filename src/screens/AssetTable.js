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


export default class AssetTable extends React.Component {
  
    constructor(props) {
        super(props);
        data=props.data;
        styles=props.styles;
        
        this.renderItem = this.renderItem.bind(this);
        this.renderEmpty = this.renderEmpty.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
        this.checkFavorite=this.checkFavorite.bind(this);
        
        this.changeFavoriteValue=this.changeFavoriteValue.bind(this);
        this.state = {
          data: props.data,
          isDarkmode:false,
        };
        
      }

      
   checkFavorite(val){
    if(val==1){
      
     return "star"
    }else{
      return "star-outline"
    }
  }

 changeFavoriteValue(val){
    
    console.log(val)
    if(val==1){
      Alert.alert('This version is not support favorites')
      return 0
     }else{
      Alert.alert('This version is not support favorites')
       return 1
     }
  }

  renderItem = ({ item, index }) => (
    
    <List.Item
    style={styles.item}
    titleStyle={[
      styles.itemTitle, {
        color : this.state.isDarkmode ? 'white' :"black" ,
    }
  ]}
    descriptionStyle={[
      styles.itemDesc,
      {
        color : this.state.isDarkmode ?'white'  :"black" ,
      }
      
  ]}
    title={item.label}
    description={item.date}
    
    right={props =><IconButton
    style={styles.itemStar}
      icon= { this.checkFavorite(item.favorite)}
      color='#fcba03'
      size={22}
      onPress={() => {
       
        var stateCopy = Object.assign({}, this.state);
      stateCopy.data[index].favorite = this.changeFavoriteValue(item.favorite);
      this.setState(stateCopy);
        
      
      } }
    />
    
    }
    left={props => <Image
      style={styles.tinyLogo}
      source={{
        uri: 'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
      }}
    />}
    onPress={() => //Alert.alert(item.date)
    this.props.navigation.navigate("AssetScreen",{itemData:item, IsMansory:0})
    }
  />
  );
 renderEmpty = () => <Text>Empty</Text>;
  renderHeader = () => 
  <View style={[styles.header,{backgroundColor:this.state.isDarkmode ? "#262834" : "#ffffff"}]}>
    <View style={styles.headerLogo}>
    <IconButton
    style={styles.logo}
      icon= "star" 
      color='#fcba03'
      size={30}
      onPress={() => {Alert.alert('This version is not support favorites') } }
    />
    </View>
    <View style={styles.headerRightButton}>
   
    <IconButton
    style={styles.headerRightButtonIcon}
      icon= "filter" 
      color={this.state.isDarkmode ? "#ffffff" : "black"}
      size={35}
      onPress={() => { Alert.alert('This version is not support filtering')} }
    />
    </View>
  </View>;

render(){
  
  return (
    
         <BigList
    data={this.state.data}
    //refreshing={true}
    renderItem={this.renderItem}
    renderEmpty={this.renderEmpty}
    renderHeader={this.renderHeader}
   
    itemHeight={85} // Required (default 0)
    headerHeight={90} // Required to show header
    footerHeight={100} // Required to show footer
  />
  );
}
}

  