import React from 'react';
import { View,Alert } from 'react-native';

import MasonryList from 'react-native-masonry-list';

import {
    Layout,
  
    Text,
    TopNav,
    Section,
    SectionContent,
    useTheme,
    themeColor ,
    
  } from "react-native-rapi-ui";

export default function ({ navigation }) {
    const { isDarkmode, setTheme } = useTheme();
data=[
    // Can be used with different image object fieldnames.
    // Ex. source, source.uri, uri, URI, url, URL
    {
      uri:
        'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
      title: '111',
    },
    {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg',
        title: 'test2',
      },
      {
        uri:
          'https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg',
        title: 'test3',
      },
      {
        uri:
          'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg',
        title: 'test4',
      },
      {
        uri:
          'https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg',
        title: 'test5',
      },
      {
        uri:
          'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg',
        title: 'test6',
      },
      {
        uri:
          'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg',
        title: 'test2',
      },
      {
        uri:
          'https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg',
        title: 'test3',
      },
      {
        uri:
          'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg',
        title: 'test4',
      },
      {
        uri:
          'https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg',
        title: 'test5',
      },
      {
        uri:
          'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg',
        title: 'test6',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg',
        title: 'test2',
      },
      {
        uri:
          'https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg',
        title: 'test3',
      },
      {
        uri:
          'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg',
        title: 'test4',
      },
      {
        uri:
          'https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg',
        title: 'test5',
      },
      {
        uri:
          'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg',
        title: 'test6',
      },
      {
        uri:
          'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg',
        title: 'test2',
      },
      {
        uri:
          'https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg',
        title: 'test3',
      },
      {
        uri:
          'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg',
        title: 'test4',
      },
      {
        uri:
          'https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg',
        title: 'test5',
      },
      {
        uri:
          'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg',
        title: 'test6',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',
        title: '111',
      },
      {
        uri:
          'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg',
        title: 'test2',
      },
      {
        uri:
          'https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg',
        title: 'test3',
      },
      {
        uri:
          'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg',
        title: 'test4',
      },
      {
        uri:
          'https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg',
        title: 'test5',
      },
      {
        uri:
          'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg',
        title: 'test6',
      },
      {
        uri:
          'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg',
        title: 'test2',
      },
      {
        uri:
          'https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg',
        title: 'test3',
      },
      {
        uri:
          'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg',
        title: 'test4',
      },
      {
        uri:
          'https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg',
        title: 'test5',
      },
      {
        uri:
          'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg',
        title: 'test6',
      },
  ]

	return (
		
			<View
				style={{
					flex: 1,
					
				}}
			>
				<MasonryList 
          columns={3}
          sorted={false}
          // containerWidth={300}
          images={data}
          onEndReachedThreshold={0.2}
          initialNumInColsToRender={10}
          listContainerStyle={{marginTop: 50}}
          onPressImage={(item) => navigation.navigate("AssetScreen",{itemData:{item}, IsMansory:1})}
          backgroundColor={isDarkmode ? "#262834" : themeColor.white100}
          emptyView={<Text>Empty</Text>}
        />
			</View>
		
	);
}
