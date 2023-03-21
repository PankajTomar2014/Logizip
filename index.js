/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry,TextInput,Text,LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import Icon from 'react-native-vector-icons/FontAwesome';

// Icon.loadFont();
LogBox.ignoreAllLogs();
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = Text.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

AppRegistry.registerComponent(appName, () => App);
