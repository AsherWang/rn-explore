## rn-explore
React Native explore

## features & dependencise
- i18n
  - `react-native-localize`
  - `i18n-js`, `lodash.memoize`
- http/request
  - `axios`
- navigation/router
  - `react-navigation`
  - `react-native-gesture-handler`
- store/model
  - `dva-core`
  - `react-redux`
- ui components
  - `native-base`
- some other toy
  - `@react-native-mapbox-gl/maps`

## project structure
mainly in `src`  
- api: http request
- components: custom components being used across screens
- i18n: internationalization config
- models: manage glbal store
- navigation: organize screens and handle router
- screens: one page one screen
- App.js: entrance
- Global.js: define global variables like translate function or global config

## build
run `yarn` and then `react-native run-android`  

## release android
`react-native run-android --variant=release`

## note
- to use `react-navigation` and `@react-native-mapbox-gl/maps` we should make some change in directory `android` and `ios`  
- make sure you make the similar change in directory `ios` before you run  `react-native run-ios`  
