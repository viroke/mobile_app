import React, {useState} from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
  Text,
  ImageBackground,
  View
} from 'react-native';

const ImageLoader = ({style, sourceObj, onPress, children}) => {
  const [imageError, setImageError] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <TouchableOpacity onPress={onPress}>
      {imageError || !sourceObj.image ? (
        <View
          style={{...style, backgroundColor: "black" }}
          onLoadEnd={() => setLoading(false)}
        />
      ) : (
        <View style={{...style, marginBottom: 15 }}>
            <Image
                style={style}
                source={{uri: sourceObj.image}}
                onError={(e) => {
                    setLoading(false);
                    setImageError(true);
                }}
                onLoadEnd={() => setLoading(false)}
            /> 
            {children}
        </View>
      )}
      {loading && (
        <ActivityIndicator
          style={styles.activityIndicator}
          animating={loading}
        />
      )}
    {/* <Text> {sourceObj.tileText ? sourceObj.tileText : "User 1"} </Text> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  activityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default ImageLoader;
