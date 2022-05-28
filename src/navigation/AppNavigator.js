import React, { useContext } from "react";
import { initializeApp, getApps } from "firebase/app";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
;
import { useTheme, themeColor } from "react-native-rapi-ui";
import TabBarIcon from "../components/utils/TabBarIcon";
import TabBarText from "../components/utils/TabBarText";
import Ionicons from 'react-native-vector-icons/Ionicons'
//Screens
import Home from "../screens/Home";
import SecondScreen from "../screens/SecondScreen";
import AboutScreen from "../screens/Info/AboutScreen"
import PrivatePolicyScreen from "../screens/Info/PrivatePolicyScreen"
import TermsAndConditionsScreen from "../screens/Info/TermsAndConditionsScreen"
import AssetScreen from "../screens/Asset/AssetScreen"
import AssetLoupe from "../screens/Asset/AssetLoupeScreen"

import About from "../screens/About";
import Profile from "../screens/Profile";
import Loading from "../screens/utils/Loading";
import MansoryScreen from "../MansoryScreen";
// Auth screens
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import ForgetPassword from "../screens/auth/ForgetPassword";
import { AuthContext } from "../provider/AuthProvider";
import Landing from "../screens/Landing";
import Camera from "../screens/Camera";
import AssetLoupeScreen from "../screens/Asset/AssetLoupeScreen";

// Better put your these secret keys in .env file
const firebaseConfig = {
  apiKey: "AIzaSyCnCu2VeL-rxTpEdQ5TsulBAlkKAuTsBzs",
  authDomain: "echis-88849.firebaseapp.com",
  projectId: "echis-88849",
  storageBucket: "echis-88849.appspot.com",
  messagingSenderId: "266723159306",
  appId: "1:266723159306:web:7daa4298fe4f4d6c385ef3",
  measurementId: "G-RGMVLMJ2N4"
};

if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

const AuthStack = createNativeStackNavigator();
const Auth = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
    </AuthStack.Navigator>
  );
};

const MainStack = createNativeStackNavigator();
const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="MainTabs" component={MainTabs} />
      <MainStack.Screen name="SecondScreen" component={SecondScreen} />
      <MainStack.Screen name="AboutScreen" component={AboutScreen} />
      <MainStack.Screen name="PrivatePolicyScreen" component={PrivatePolicyScreen} />
      <MainStack.Screen name="TermsAndConditionsScreen" component={TermsAndConditionsScreen} />
      <MainStack.Screen name="AssetScreen" component={AssetScreen} />
      <MainStack.Screen name="AssetLoupeScreen" component={AssetLoupeScreen} />
    </MainStack.Navigator>
  );
};

const Tabs = createBottomTabNavigator();
const MainTabs = () => {
  const { isDarkmode } = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: isDarkmode ? themeColor.dark100 : "#c0c0c0",
          backgroundColor: isDarkmode ? themeColor.dark200 : "#ffffff",
        },
        tabBarOptions: {
        activeTintColor: 'black',
  },
      }}
    >
      {/* these icons using Ionicons */}
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="List" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"list-outline"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Mansory"
        component={MansoryScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Mansory" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"ios-apps-sharp"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Landing"
        component={Landing}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Landing" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"ios-albums"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Settings" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"settings"} />
          ),
        }}
      />
      <Tabs.Screen
        name="CameraActive"
        component={Camera}
        options={{
          tabBarStyle:{display:'none'},
          tabBarVisible: false,
          tabBarButton: () => null,
          
        }}
      />
      
    </Tabs.Navigator>
  );
};

export default () => {
  const auth = useContext(AuthContext);
  const user = auth.user;
  return (
    <NavigationContainer>
      {user == null && <Loading />}
      {user == false && <Auth />}
      {user == true && <Main />}
    </NavigationContainer>
  );
};
