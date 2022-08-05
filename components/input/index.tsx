import { useState } from 'react'

import {
  TextInput, TouchableOpacity, View
} from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { styles } from './styles'
import { colors } from '../../assets/colors'

interface InputProps {
  onCreate: (taak:string) => void
}

export function Input({ onCreate }:InputProps) {
  const [task, setTask] = useState('')

	function handleSubmitNewTask() {
	  if(!task) {
		  return
		}
		
		onCreate(task)
		setTask('')
	}

  return (
    <View style={styles.wrapper}>
      <TextInput
			  style={styles.input}
				onChangeText={(text) => setTask(text)}
				placeholderTextColor={colors.gray[300]}
				placeholder="Task description"
				defaultValue={task}
			/>
      <TouchableOpacity
			  style={{
				  ...styles.button,
				  backgroundColor: !task ?
					colors.blue[500] :
					colors.blue[400]
				}}
				disabled={!task}
				onPress={handleSubmitNewTask}
			>
        <MaterialCommunityIcons
				  name="plus-circle-outline"
					size={20}
					color={colors.gray[100]}
				/>
      </TouchableOpacity>
    </View>
  )
}
