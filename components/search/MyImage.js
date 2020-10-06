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
import NameWithVerification from '../app/NameWithVerification';

const MyImage = ({style, sourceObj, onPress}) => {
  const [imageError, setImageError] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <TouchableOpacity onPress={onPress}>
      {imageError || !sourceObj.image ? (
        <ImageBackground
          source={{ uri: "https://res.cloudinary.com/dk46xvr7i/image/upload/v1590768670/ddsz45rfweus6fisjsgc.jpg" }}
          style={style}
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
            
            <NameWithVerification textStyle={{ color: "white", marginTop: 5 }} iconStyle={{ width: 12, height: 12, top: 6, marginLeft: 4 }} text={sourceObj.tileText} isVerified={true} />
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

export default MyImage;
