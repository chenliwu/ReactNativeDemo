import { AppRegistry } from 'react-native';
import App from './App';
import LotsOfGreetings from './src/PropDemp';
import BlinkApp from './src/StateDemo';
import LotsOfStyle from './src/StyleDemo';
import FixedDimensionsBasics from './src/FixedDimensionsDemo';
import FlexDirectionBasics from './src/FlexboxDemo/FlexDirection';
import JustifyContentBasics  from './src/FlexboxDemo/JustifyContent';
import AlignItemsBasics  from './src/FlexboxDemo/AlignItems';
import FlexWrapBasics from './src/FlexboxDemo/FlexWrap';
import FlexBasics from './src/FlexboxDemo/Flex';
import AlignSelfBasics from './src/FlexboxDemo/AlignSelf';

import ES6_Test, { Component } from './src/ES6_Test/ES6_Test1';




/**
 * 这一句代码相当于应用程序入口
 */
//AppRegistry.registerComponent('ReactNativeDemo', () => App);
//AppRegistry.registerComponent('ReactNativeDemo', () => FixedDimensionsBasics);
//AppRegistry.registerComponent('ReactNativeDemo', () => FlexDirectionBasics);
//AppRegistry.registerComponent('ReactNativeDemo', () => FlexWrapBasics);
//AppRegistry.registerComponent('ReactNativeDemo', () => FlexBasics);
//AppRegistry.registerComponent('ReactNativeDemo', () => AlignSelfBasics);
//AppRegistry.registerComponent('ReactNativeDemo', () => LotsOfGreetings);
//AppRegistry.registerComponent('ReactNativeDemo', () => JustifyContentBasics );
//AppRegistry.registerComponent('ReactNativeDemo', () => AlignItemsBasics );

AppRegistry.registerComponent('ReactNativeDemo', () => ES6_Test );
