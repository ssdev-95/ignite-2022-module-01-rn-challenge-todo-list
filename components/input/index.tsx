import { TextInput, TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native-paper'
import { styles } from './styles'

export function Input() {
  return (
    <View style={styles.wrapper}>
      <TextInput style={styles.input} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}
