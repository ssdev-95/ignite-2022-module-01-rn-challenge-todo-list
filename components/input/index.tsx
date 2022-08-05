import {
	TextInput, TouchableOpacity, View
} from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { styles } from './styles'
import { colors } from '../../assets/colors'

interface TaskType {
  id:string
	description:string
}

export function Input() {
  const tasks:TaskType[] = []

  return (
    <View style={styles.wrapper}>
      <TextInput
			  style={styles.input}
				placeholderTextColor={colors.gray[300]}
				placeholder="Task description"
			/>
      <TouchableOpacity style={styles.button}>
        <MaterialCommunityIcons
				  name="plus-circle-outline"
					size={20}
					color={colors.gray[100]}
				/>
      </TouchableOpacity>
    </View>
  )
}
