import { AppRegistry } from 'react-native';
import './src/Global'; // set global variables and init i18n
import App from './src/App';
import { name as appName } from './src/app.json';

AppRegistry.registerComponent(appName, () => App);
