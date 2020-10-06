import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
const { width, height } = Dimensions.get("window");
import { BlurView } from 'expo-blur';

export default function CameraViewBlur(props) {
  const [hasPermission, setHasPermission] = useState(false);
  const [camera, setCameraObject] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const blur = props.blur === undefined ? true : props.blur 
  const RenderComponentOnView = props.renderComponentOnView;
  let isCameraPreviewing = false;

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');

    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1, width, height  }} type={type} ratio={"16:9"} ref={ref => {
          setCameraObject(ref);
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <BlurView intensity={blur ? 100 : 0} tint={'dark'}>
            { RenderComponentOnView && <RenderComponentOnView 
              {...props} 
              hasCameraAccess={hasPermission} 
              camera={camera} 
            />}
          </BlurView>
        </View>
      </Camera>
    </View>
  );
}