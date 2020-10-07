import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity, Text, SafeAreaView, Animated, Alert, StyleSheet, Dimensions } from 'react-native';
import get from 'lodash/get';
import { NodePlayerView } from 'react-native-nodemediaclient';
const { width, height } = Dimensions.get('window');

export default class Viewer extends Component {
  state = {
      inputUrl: "rtmp://192.168.88.81:19000/live/SkC3AKsUD"
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

  renderNodePlayerView = () => {
    const { inputUrl } = this.state;
    if (!inputUrl) return null;
    return (
      <NodePlayerView
        style={styles.playerView}
        ref={(vb) => {
          this.nodePlayerView = vb;
        }}
        inputUrl={inputUrl}
        scaleMode="ScaleAspectFit"
        bufferTime={300}
        maxBufferTime={1000}
        autoplay
      />
    );
  };

  render() {
    /**
     * Viewer mode
     */
    return (
      <View style={styles.container}>
        {this.renderNodePlayerView()}
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