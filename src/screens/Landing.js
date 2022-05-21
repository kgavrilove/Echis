import React, { useState, useEffect } from 'react';
import { View, Linking, Alert  } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import {
  Layout,
  Button,
  Text,
  TopNav,
  Section,
  SectionContent,
  useTheme,
} from "react-native-rapi-ui";

import { Camera } from 'expo-camera';



export default function ({ navigation }) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const { isDarkmode, setTheme } = useTheme();
  const auth = getAuth();

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
})();
  }, []);

  return (
    <Layout>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 20,
        }}
      >
        <Button
              text={'Open Camera'}
              status={isDarkmode ? "success" : "warning"}
              onPress={() => {
                if(hasCameraPermission){
                  navigation.navigate('CameraActive');
                  console.log('Acces to camera=='+hasCameraPermission);
                }else{
                  Alert.alert("Access to Camera denied");
                }
                
              }}
              style={{
                marginTop: 20,
                width: 200,
                height: 150,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                borderRadius: 150,
                backgroundColor: '#ccc',
              }}
            />
      </View>
    </Layout>
  );
}
