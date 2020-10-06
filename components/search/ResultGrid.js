import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
var {width} = Dimensions.get('window');
import * as _ from 'lodash';
import ImageLoader from '../common/ImageLoader';
import NameWithVerification from '../app/NameWithVerification';

const ResultGrid = ({
  data,
  columns,
  onEndReachedThreshold,
  onEndReached,
  loading = false,
  onItemClick,
}) => {
  const groupEveryNthRow = 3;
  const {mainContainer, groupedGridContainer} = styles;
  var currentRow = 0;
  const rowsArray = _.chunk(data, columns);
  var bigImageSide = 'right';

  const renderGroupedItem = (row) => {
    const smallImage1 = row[0];
    const smallImage2 = row[1];
    const largeImage = row[2];

    if (bigImageSide === 'right') {
      bigImageSide = 'left';
      return (
        <View style={{flexDirection: 'row'}}>
          <View style={groupedGridContainer}>
            <View style={styles.gridStyle}>
              <ImageLoader
                style={styles.imageThumbnail}
                sourceObj={{ image: smallImage1.profileImage, tileText: smallImage1.fullName }}
                onPress={() => {
                  onItemClick(smallImage1);
                }}
              >             
                <NameWithVerification textStyle={{ color: "white", marginTop: 5 }} iconStyle={{ width: 12, height: 12, top: 6, marginLeft: 4 }} text={smallImage1.fullName} isVerified={true} />
              </ImageLoader>
            </View>
            <View style={styles.gridStyle}>
              <ImageLoader
                style={styles.imageThumbnail}
                sourceObj={{ image: smallImage2.profileImage, tileText: smallImage2.fullName }}
                onPress={() => {
                  onItemClick(smallImage2);
                }}
              >
                <NameWithVerification textStyle={{ color: "white", marginTop: 5 }} iconStyle={{ width: 12, height: 12, top: 6, marginLeft: 4 }} text={smallImage2.fullName} isVerified={true} />
              </ImageLoader>
            </View>
          </View>
          <View style={styles.gridStyle}>
            <ImageLoader
              style={styles.imageThumbnailLarge}
              sourceObj={{ image: largeImage.profileImage, tileText: largeImage.fullName }}
              onPress={() => {
                onItemClick(largeImage);
              }}
            >
              <NameWithVerification textStyle={{ color: "white", marginTop: 5 }} iconStyle={{ width: 12, height: 12, top: 6, marginLeft: 4 }} text={largeImage.fullName} isVerified={true} />
            </ImageLoader>
          </View>
        </View>
      );
    } else {
      bigImageSide = 'right';
      return (
        <View style={{flexDirection: 'row'}}>
          <View style={styles.gridStyle}>
            <ImageLoader
              style={styles.imageThumbnailLarge}
              sourceObj={{ image: largeImage.profileImage, tileText: largeImage.fullName }}
              onPress={() => {
                onItemClick(largeImage);
              }}
            > <NameWithVerification textStyle={{ color: "white", marginTop: 5 }} iconStyle={{ width: 12, height: 12, top: 6, marginLeft: 4 }} text={largeImage.fullName} isVerified={true} />
              </ImageLoader>
          </View>
          <View style={groupedGridContainer}>
            <View style={styles.gridStyle}>
              <ImageLoader
                style={styles.imageThumbnail}
                sourceObj={{ image: smallImage1.profileImage, tileText: smallImage1.fullName }}
                onPress={() => {
                  onItemClick(smallImage1);
                }}
              ><NameWithVerification textStyle={{ color: "white", marginTop: 5 }} iconStyle={{ width: 12, height: 12, top: 6, marginLeft: 4 }} text={smallImage1.fullName} isVerified={true} />
              </ImageLoader>
            </View>
            <View style={styles.gridStyle}>
              <ImageLoader
                style={styles.imageThumbnail}
                sourceObj={{ image: smallImage2.profileImage, tileText: smallImage1.fullName }}
                onPress={() => {
                  onItemClick(smallImage2);
                }}
              ><NameWithVerification textStyle={{ color: "white", marginTop: 5 }} iconStyle={{ width: 12, height: 12, top: 6, marginLeft: 4 }} text={smallImage1.fullName} isVerified={true} />
              </ImageLoader>
            </View>
          </View>
        </View>
      );
    }
  };

  const renderSingleItem = (item, i) => {
    return (
      <View style={styles.gridStyle} key={i}>
        <ImageLoader
          style={styles.imageThumbnail}
          sourceObj={{ image: item.profileImage, tileText: item.fullName }}
          onPress={() => {
            onItemClick(item);
          }}
        ><NameWithVerification textStyle={{ color: "white", marginTop: 5 }} iconStyle={{ width: 12, height: 12, top: 6, marginLeft: 4 }} text={item.fullName} isVerified={true} />
              </ImageLoader>
      </View>
    );
  };

  const renderCell = (row, i) => {
    if (row.length >= columns && currentRow % groupEveryNthRow === 0) {
      currentRow++;
      return <View key={i}>{renderGroupedItem(row)}</View>;
    }
    currentRow++;
    return (
      <View style={{flexDirection: 'row'}} key={i}>
        {row.map((item, i) => {
          return renderSingleItem(item, i);
        })}
      </View>
    );
  };

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  const renderFooter = () => {
    return (
      <View style={{marginBottom: 16}}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  return (
    <ScrollView
      scrollEventThrottle={onEndReachedThreshold}
      showsVerticalScrollIndicator={false}
      onScroll={({nativeEvent}) => {
        if (isCloseToBottom(nativeEvent)) {
          onEndReached();
        }
      }}>
      <View style={mainContainer}>
        {rowsArray.map((row, index) => {
          return renderCell(row, index);
        })}
      </View>
      {loading && renderFooter()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
  },
  groupedGridContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  imageThumbnail: {
    height: width / 3 - 6,
    width: width / 3 - 6,
    resizeMode: 'cover',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
  imageThumbnailLarge: {
    height: width * 0.6 + 36,
    width: width * 0.6 + 16,
    resizeMode: 'cover',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
  gridStyle: {
    margin: 4,
    marginLeft: 0
  },
});

export default ResultGrid;