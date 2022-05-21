import {StatusBar} from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import {StyleSheet, View, TouchableOpacity, Alert, ImageBackground, Image} from 'react-native'
import {Camera} from 'expo-camera'
import {
	Layout,
	Button,
	Text,
	TopNav,
	Section,
	SectionContent,
	useTheme,
  } from "react-native-rapi-ui";


export default function ({ navigation }) {
	const [camera, setCamera] = useState(null);
	const [image, setImage] = useState(null);
	const [type, setType] = useState(Camera.Constants.Type.back);
	const [flashMode, setFlashMode] = React.useState('off')
	const [cameraType, setCameraType] = React.useState(Camera.Constants.Type.back)
	const [previewVisible, setPreviewVisible] = useState(false)
	const [capturedImage, setCapturedImage] = useState(null)
	
	const __savePhoto = () => {
		navigation.navigate('Landing');
	}
	const __retakePicture = () => {
		setCapturedImage(null)
		setPreviewVisible(false)
		//__startCamera()
	  }

	  const __handleFlashMode = () => {
		if (flashMode === 'on') {
		  setFlashMode('off')
		} else if (flashMode === 'off') {
		  setFlashMode('on')
		} else {
		  setFlashMode('auto')
		}
	  }

	  const __takePicture = async () => {
		if (!camera) return
		const photo = await camera.takePictureAsync()
		console.log(photo)
		setPreviewVisible(true)
		setCapturedImage(photo)
	  }

	  const __switchCamera = () => {
		if (cameraType === 'back') {
		  setCameraType('front')
		} else {
		  setCameraType('back')
		}
	  }

	return (
		<View style={{ flex: 1}}>
			{previewVisible && capturedImage ? (
            <CameraPreview photo={capturedImage} savePhoto={__savePhoto} retakePicture={__retakePicture} />
          ) : (
      <View style={styles.cameraContainer}>
            <Camera 
            ref={ref => setCamera(ref)}
            style={styles.fixedRatio} 
            type={type}
             />
			 
			 <View
        style={{
        position: 'absolute',
        bottom: 75,
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        padding: 20,
        justifyContent: 'space-between'
        }}
      >
        <View
        style={{
        alignSelf: 'center',
        flex: 1,
        alignItems: 'center'
        }}
        >
            <TouchableOpacity
            onPress={__takePicture}
            style={{
            width: 70,
            height: 70,
            bottom: 0,
            borderRadius: 50,
            backgroundColor: '#fff'
            }}
            />
    </View>
    </View>
				

	<View
        style={{
        position: 'absolute',
        top:30,
		right: 0,
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        padding: 20,
        justifyContent: 'space-between'
        }}
      >
        <View
        style={{
        
        flex: 1,
        
        }}
        >
            <TouchableOpacity
           onPress={() => {
			
			  navigation.navigate('Landing');
			}
			
		  }
            style={{
            width: 70,
            height: 70,
            bottom: 0,
           
            }}
			
			
            >
				<Text
                style={{
                  color: '#fff',
                  fontSize: 20
                }}
              >
                Exit
              </Text>
				</TouchableOpacity>
			
    </View>
    </View>

      </View>
		  )}
   </View>
  );
}
const styles = StyleSheet.create({
	cameraContainer: {
		flex: 1,
		
	},
	fixedRatio:{
		flex: 1,
		
	},
	button:{
		position: 'absolute',
		left: '5%',
		top: '10%',
		borderRadius: 100,
		height: 25,
		width: 25
		
	}
  })

  const CameraPreview = ({photo, retakePicture, savePhoto}) => {
	console.log('preview photo', photo)
	return (
	  <View
		style={{
		  backgroundColor: 'transparent',
		  flex: 1,
		  width: '100%',
		  height: '100%'
		}}
	  >
		<ImageBackground
		  source={{uri: photo && photo.uri}}
		  style={{
			flex: 1
		  }}
		>
		  <View
			style={{
			  flex: 1,
			  flexDirection: 'column',
			  padding: 15,
			  justifyContent: 'flex-end'
			}}
		  >
			<View
			  style={{
				flexDirection: 'row',
				justifyContent: 'space-between'
			  }}
			>
			  <TouchableOpacity
				onPress={retakePicture}
				style={{
				  width: 130,
				  height: 40,
  
				  alignItems: 'center',
				  borderRadius: 4
				}}
			  >
				<Text
				  style={{
					color: '#fff',
					fontSize: 20
				  }}
				>
				  Re-take
				</Text>
			  </TouchableOpacity>
			  <TouchableOpacity
				onPress={savePhoto}
				style={{
				  width: 130,
				  height: 40,
  
				  alignItems: 'center',
				  borderRadius: 4
				}}
			  >
				<Text
				  style={{
					color: '#fff',
					fontSize: 20
				  }}
				>
				  Submit
				</Text>
			  </TouchableOpacity>
			</View>
		  </View>
		</ImageBackground>
	  </View>
	)
  }