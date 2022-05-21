import React, {useState}  from 'react';
import { View, Linking } from 'react-native';
import { Layout, Text, themeColor } from 'react-native-rapi-ui';
import { getAuth, signOut} from "firebase/auth";


import {
	StyleSheet,
	Image,
	Platform,
	Switch,
	Alert,
  } from 'react-native'

 
  import Icon from 'react-native-vector-icons/Entypo'

  import { useTheme } from "react-native-rapi-ui";


  const fontFamily = Platform.OS === 'ios' ? 'Avenir' : 'sans-serif'

 
  import SettingsList from 'react-native-settings-list';
import { CurrentRenderContext } from '@react-navigation/native';
  

export default function ({ navigation }) {

	const auth = getAuth();
	const user = auth.currentUser;
	  const mail = user.email.toString();

  
/*Theme logic */
const { isDarkmode, setTheme } = useTheme();
const [Mode, SetMode] = useState('Light');

const changeTheme = () => {
	if (isDarkmode) {
		setTheme("light");
		SetMode("Light");
	  } else {
		setTheme("dark");
		SetMode("Dark");
	  }
  };
  
/** Theme Logic */

/**Auth */

/**Auth */

 

/**<StatusBar barStyle="light-content" backgroundColor="#8c231a" />  */


	return (
		<View style={styles.container} Theme ={useTheme()} backgroundColor={isDarkmode ? "#191921" : themeColor.white100} > 
			 
		
       
		
          
		  <View style={styles.heroContainer} backgroundColor={isDarkmode ? "#262834" : themeColor.white100}   >
		<View style={styles.heroImage} backgroundColor={isDarkmode ? themeColor.white100 : "black"} borderColor={isDarkmode ? themeColor.white100 : "black"}>
		   <Text style={{
		fontFamily,
		color : isDarkmode ? "black" : themeColor.white100,
		fontSize: 50,
		   }}  > {mail[0].toUpperCase()}</Text> 
		</View>
		<View style={{ flex: 1 }}>
		  <Text style={styles.heroTitle} color={isDarkmode ? "black" : themeColor.white100}>{user.email}</Text>
		  <Text style={styles.heroSubtitle}>{user.metadata.creationTime}</Text>
		</View>
		</View>

		<SettingsList  defaultItemSize={50} underlayColor='black' borderColor='#c8c7cc' >
		<SettingsList.Header headerText='APP' 
		 headerStyle={{
			color : isDarkmode ? themeColor.white100 : "black",
			fontFamily,
		textTransform:'uppercase',
		fontSize: 16,
		marginTop:15,
		marginLeft:25,
		
		  
		  }}/>
          <SettingsList.Item
		  titleStyle ={{
			color : isDarkmode ? themeColor.white100 : "black",
			fontFamily,
			fontSize: 16,
		  
		  }}
		  backgroundColor= {isDarkmode ? "#262834" : themeColor.white100}
		   arrowIcon={<Text style={styles.arrowText} >
		   {Mode}
		 </Text>}
            hasNavArrow={false}
            title='Theme'
            titleInfo='Set appearence'
            titleInfoStyle={styles.titleInfoStyle}
            onPress={() => changeTheme()}
          />
          <SettingsList.Item
		  titleStyle ={{
			color : isDarkmode ? themeColor.white100 : "black",
			fontFamily,
			fontSize: 16,
		  
		  }}
		  backgroundColor= {isDarkmode ? "#262834" : themeColor.white100}
            hasNavArrow={false}
			arrowIcon={<Text style={styles.arrowText}>
		   English
		 </Text>}
            title='Language'
            titleInfo='Change app language'
            titleInfoStyle={styles.titleInfoStyle}
            onPress={() => Alert.alert('Current version is not support this function')}
          />
          <SettingsList.Item
		  titleStyle ={{
			color : isDarkmode ? themeColor.white100 : "black",
			fontFamily,
			fontSize: 16,
		  
		  }}
		  backgroundColor= {isDarkmode ? "#262834" : themeColor.white100}
            arrowIcon={<Icon
				style={styles.imageStyleRight }
				name="lock"
				size={24}
				color={isDarkmode ? themeColor.white100 : "black"}
			  />}
            title='Private Policy'
            onPress={() => navigation.navigate("PrivatePolicyScreen")}
          />
		  <SettingsList.Item
		  titleStyle ={{
			color : isDarkmode ? themeColor.white100 : "black",
			fontFamily,
			fontSize: 16,
		  
		  }}
		  backgroundColor= {isDarkmode ? "#262834" : themeColor.white100}
		  
            arrowIcon={<Icon
				style={styles.imageStyleRight }
				name="info-with-circle"
				size={24}
				color={isDarkmode ? themeColor.white100 : "black"}
			  />}
            title='About'
            onPress={() => navigation.navigate("AboutScreen")}
          />
		  <SettingsList.Item
		  titleStyle ={{
			color : isDarkmode ? themeColor.white100 : "black",
			fontFamily,
			fontSize: 16,
		  
		  }}
		  backgroundColor= {isDarkmode ? "#262834" : themeColor.white100}
            arrowIcon={<Icon
				style={styles.imageStyleRight }
				name="text-document-inverted"
				size={24}
				color={isDarkmode ? themeColor.white100 : "black"}
			  />}
            title='Terms & Condiditions'
            onPress={() => navigation.navigate("TermsAndConditionsScreen")}
          />
          
          <SettingsList.Header headerText='Notifications'
		  headerStyle={{
			color : isDarkmode ? themeColor.white100 : "black",
			fontFamily,
		textTransform:'uppercase',
		fontSize: 16,
		marginTop:15,
		marginLeft:25,
		  
		  }}/>
          <SettingsList.Item 
		  titleStyle ={{
			color : isDarkmode ? themeColor.white100 : "black",
			fontFamily,
			fontSize: 16,
		  
		  }}
		  backgroundColor= {isDarkmode ? "#262834" : themeColor.white100}
		  hasSwitch={true}
		  hasNavArrow={false}
		  titleInfo='Recieve daily notifications'
            icon={<Icon
				style={styles.imageStyle }
				name="newsletter"
				size={24}
				color={isDarkmode ? themeColor.white100 : "black"}
			  />}
            title='News'
            onPress={() => Alert.alert('Route To Notifications Page')}
          />
          
          <SettingsList.Header headerText='Account' 
		   headerStyle={{
			color : isDarkmode ? themeColor.white100 : "black",
			fontFamily,
		textTransform:'uppercase',
		fontSize: 16,
		marginTop:15,
		marginLeft:25,
		  
		  }}/>
          <SettingsList.Item
		  titleStyle ={{
			  color : isDarkmode ? themeColor.white100 : "red",
			  fontFamily,
			  fontSize: 16,
			
			}}
		  backgroundColor= {isDarkmode ? "#262834" : themeColor.white100}
            icon={<Icon
				style={styles.imageStyle}
				name="log-out"
				size={24}
				color={isDarkmode ? themeColor.white100 : "red"}
			  />}
            title='Logout'
			hasNavArrow={false}
            onPress={() => signOut(auth)}
			
          />
		  
          
        </SettingsList>
		<View>
		<Text 
          style={{
            alignSelf: 'center',
            fontSize: 18,
            color : isDarkmode ? themeColor.white100 :'#999' ,
            fontFamily,
          }}
        >
          Echis
        </Text>
		<Text 
          style={{
            alignSelf: 'center',
            fontSize: 18,
			color : isDarkmode ? themeColor.white100 :'#999' ,
            
            marginBottom: 30,
            
            fontFamily,
          }}
        >
          v0.3apha
        </Text>
		</View>
          
        
        
        
      </View>
	);
}



const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: 'white',
	  margintop:0,
	  
	  
	},
	
	heroContainer: {
		
	 marginTop:60,
	  marginBottom: 50,
	  paddingVertical: 20,
	  justifyContent: 'center',
	  alignItems: 'center',
	  
	  borderTopWidth: StyleSheet.hairlineWidth,
	  borderBottomWidth: StyleSheet.hairlineWidth,
	  borderColor: '#ccc',
	  flexDirection: 'row',
	  
	},
	heroImage: {
	  width: 80,
	  height: 80,
	  borderRadius: 40,
	  borderWidth: 3,
	 
	  marginHorizontal: 20,
	  justifyContent: 'center',
	  alignItems: 'center',
	  
	},
	heroTitle: {
	  fontFamily,
	 
	  fontSize: 20,
	},
	heroSubtitle: {
	  fontFamily,
	  color: '#999',
	  fontSize: 14,
	},
	heroSign: {
		
		
	  },

	  imageStyle: {
		alignSelf:'center',
		height:30,
		width:30,
		marginLeft: 20,
	  },
	  imageStyleRight: {
		alignSelf:'center',
		
		height:30,
		width:30,
		marginRight: 10,
	  },
	  arrowText: {
		alignSelf:'center',
		marginRight: 10,
	  },
	  
  })
  