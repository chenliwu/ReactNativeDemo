import { AppRegistry } from 'react-native';
import App from './App';
import LotsOfGreetings from './src/PropDemp';
import BlinkApp from './src/StateDemo';
import LotsOfStyle from './src/StyleDemo';
import FixedDimensionsBasics from './src/FixedDimensionsDemo';
import FlexDirectionBasics from './src/FlexboxDemo/FlexDirection';
import JustifyContentBasics  from './src/FlexboxDemo/JustifyContent';
import AlignItemsBasics  from './src/FlexboxDemo/AlignItems';



/**
 * 这一句代码相当于应用程序入口
 */
//AppRegistry.registerComponent('ReactNativeDemo', () => App);
//AppRegistry.registerComponent('ReactNativeDemo', () => FixedDimensionsBasics);
//AppRegistry.registerComponent('ReactNativeDemo', () => FlexDirectionBasics);
//AppRegistry.registerComponent('ReactNativeDemo', () => LotsOfGreetings);
//AppRegistry.registerComponent('ReactNativeDemo', () => JustifyContentBasics );
AppRegistry.registerComponent('ReactNativeDemo', () => AlignItemsBasics );
