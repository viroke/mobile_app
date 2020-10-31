import * as React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Feather } from "@expo/vector-icons";

let routeIconHash = {
    'Home': 'home',
    'StartLiveNavigator': 'home',
    'Discover': 'search',
    'Notification': 'bell',
    'Wallet': 'activity',
    'Profile': 'user',
    'SessionsNavigator': 'film'
}
// import Svg, {
//   G,
//   Path,
//   Rect,
//   Defs,
//   ClipPath,
// } from 'react-native-svg';

export default function TabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  // console.log({ focusedOptions, descriptors })
  if (focusedOptions.tabBarVisible == false) {
    return null;
  }

  return (
    <View style={{ flexDirection: 'row', backgroundColor: "#1D2024", height: 50 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        if(options.tabBarVisible === false) return null;
        
        const labelIcon =
          options.tabBarLabelIcon || (options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name);
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            key={index}
          >
            <Feather
                  name={routeIconHash[labelIcon]}
                  size={24}
                  color={isFocused ? "#2F80ED" : "#CDCCCE"}
                />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
