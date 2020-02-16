/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Routes from './src/Routes';
import App from './src/screens/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Routes);
