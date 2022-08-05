import { Image } from 'react-native'
import { Surface } from 'react-native-paper'
import { styles } from './styles'

export function Header() {
  return (
    <Surface style={styles.header}>
      <Image height={16} source={require('../../assets/logo.png')} />
    </Surface>
  )
}
