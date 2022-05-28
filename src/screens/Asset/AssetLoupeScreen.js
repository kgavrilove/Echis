import React, { Component } from 'react';
import { View } from "react-native";

import { Modal } from 'react-native';

import ImageViewer from 'react-native-image-zoom-viewer';


const images = [{
  // Simplest usage.
  url: 'https://artscene.ru/storage/app/public/uploads/assets/88-111.jpg',

  // width: number
  // height: number
  // Optional, if you know the image size, you can set the optimization performance

  // You can pass props to <Image />.
  props: {
      // headers: ...
  }

}]

export default class Main extends Component {
  state = {
    index: 0,
    modalVisible: true
  };

  render() {
    return (
      <View
        style={{
          padding: 10
        }}
      >
        <Modal
          visible={this.state.modalVisible}
          transparent={true}
          onRequestClose={() => this.setState({ modalVisible: false })}
        >
          <ImageViewer
            imageUrls={images}
            index={this.state.index}
            onSwipeDown={() => {
              console.log('onSwipeDown');
               this.props.navigation.goBack();
            }}
            onMove={data => console.log(data)}
            enableSwipeDown={true}
          />
        </Modal>
      </View>
    );
  }
}