import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import {
  DefaultTheme,
  Provider as PaperProvider,
  Text,
} from 'react-native-paper'

import { colors } from './assets/colors'

const theme = {
  ...DefaultTheme,
  ...colors,
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={style.container}>
        <Text style={{ color: colors.gray[100] }}>Hello world!</Text>
        <StatusBar style="light" translucent />
      </View>
    </PaperProvider>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.gray[600],
  },
})
