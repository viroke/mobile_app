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
import MyImage from './MyImage';

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
              <MyImage
                style={styles.imageThumbnail}
                sourceObj={{ image: smallImage1.profileImage, tileText: smallImage1.fullName }}
                onPress={() => {
                  onItemClick(smallImage1);
                }}
              />
            </View>
            <View style={styles.gridStyle}>
              <MyImage
                style={styles.imageThumbnail}
                sourceObj={{ image: smallImage2.profileImage, tileText: smallImage2.fullName }}
                onPress={() => {
                  onItemClick(smallImage2);
                }}
              />
            </View>
          </View>
          <View style={styles.gridStyle}>
            <MyImage
              style={styles.imageThumbnailLarge}
              sourceObj={{ image: largeImage.profileImage, tileText: largeImage.fullName }}
              onPress={() => {
                onItemClick(largeImage);
              }}
            />
          </View>
        </View>
      );
    } else {
      bigImageSide = 'right';
      return (
        <View style={{flexDirection: 'row'}}>
          <View style={styles.gridStyle}>
            <MyImage
              style={styles.imageThumbnailLarge}
              sourceObj={{ image: largeImage.profileImage, tileText: largeImage.fullName }}
              onPress={() => {
                onItemClick(largeImage);
              }}
            />
          </View>
          <View style={groupedGridContainer}>
            <View style={styles.gridStyle}>
              <MyImage
                style={styles.imageThumbnail}
                sourceObj={{ image: smallImage1.profileImage, tileText: smallImage1.fullName }}
                onPress={() => {
                  onItemClick(smallImage1);
                }}
              />
            </View>
            <View style={styles.gridStyle}>
              <MyImage
                style={styles.imageThumbnail}
                sourceObj={{ image: smallImage2.profileImage, tileText: smallImage1.fullName }}
                onPress={() => {
                  onItemClick(smallImage2);
                }}
              />
            </View>
          </View>
        </View>
      );
    }
  };

  const renderSingleItem = (item, i) => {
    return (
      <View style={styles.gridStyle} key={i}>
        <MyImage
          style={styles.imageThumbnail}
          sourceObj={{ image: item.profileImage, tileText: item.fullName }}
          onPress={() => {
            onItemClick(item);
          }}
        />
      </View>
    );
  };

  const renderCell = (row) => {
    if (row.length >= columns && currentRow % groupEveryNthRow === 0) {
      currentRow++;
      return <View>{renderGroupedItem(row)}</View>;
    }
    currentRow++;
    return (
      <View style={{flexDirection: 'row'}}>
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
    height: width / 3 - 12,
    width: width / 3 - 12,
    resizeMode: 'cover',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
  imageThumbnailLarge: {
    height: width * 0.6 + 12,
    width: width * 0.6 + 12,
    resizeMode: 'cover',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
  gridStyle: {
    margin: 4,
    marginLeft: 0,
  },
});

export default ResultGrid;