import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity, Text, SafeAreaView, Animated, Alert, StyleSheet, Dimensions } from 'react-native';
import get from 'lodash/get';
const { width, height } = Dimensions.get('window');
import {Video} from "expo-av";
import { RtmpView } from 'react-native-rtmpview';

export default class Viewer extends Component {
  state = {
      inputUrl: "rtmp://192.168.88.81:19000/live/SkC3AKsUD",
      player: null
  }
  constructor(props) {
    super(props);
    const { route } = props;
    const data = get(route, 'params.data');
    
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    if (this.nodePlayerView) this.nodePlayerView.stop();
  }

  renderRTMPPlayerView = () => {
      const { inputUrl } = this.state;
      if (!inputUrl) return null;
      return (
          <RtmpView
            style={styles.playerView}
            shouldMute={true}
            ref={e => { this.player = e; }}
            onPlaybackState={(data) => {
                console.log("handlePlaybackState",{data});
            }}
            onFirstVideoFrameRendered={(data) => {
                console.log("handleFirstVideoFrameRendered",{data});
            }}
            url="rtmp://127.0.0.1/live/SkC3AKsUD"
        />
      )
  }

  render() {
    /**
     * Viewer mode
     */
    return (
      <View style={styles.container}>
        {this.renderRTMPPlayerView()}
      </View>
    );
  }
}

Viewer.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
  route: PropTypes.shape({}),
};

Viewer.defaultProps = {
  navigation: {
    goBack: () => null,
  },
  route: {},
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  playerView: {
    position: 'absolute',
    top: 0,
    left: 0,
    height,
    width,
  }
});