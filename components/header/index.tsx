import { View, Image } from 'react-native'
import { styles } from './styles'

export function Header() {
  return (
    <View style={styles.header}>
      <Image height={16} source={require('../../assets/logo.png')} />
    </View>
  )
}
