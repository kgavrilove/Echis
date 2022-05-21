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
          data: props.data
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
      
      return 0
     }else{
      
       return 1
     }
  }

  renderItem = ({ item, index }) => (
    <List.Item
    style={styles.item}
    titleStyle={styles.itemTitle}
    descriptionStyle={styles.itemDesc}
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
    onPress={() => Alert.alert('Current version is not support this function')}
  />
  );
 renderEmpty = () => <Text>Empty</Text>;
  renderHeader = () => <Text style={{backgroundColor:'red'}}>Header</Text>;

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

  