import { ReactNode } from 'react'
import { View } from 'react-native'
import { styles } from './styles'

type BackgroundProps = {
  children: ReactNode
}

export function Background({ children }: BackgroundProps) {
  return <View style={styles.background}>{children}</View>
}
