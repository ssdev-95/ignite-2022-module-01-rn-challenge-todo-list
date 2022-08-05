import {
 TouchableHighlight, View, Text
} from "react-native";

import {
  MaterialCommunityIcons
} from '@expo/vector-icons'

import { styles } from "./styles";
import {colors} from "../../assets/colors";

interface TaskProps {
  task: TodoList.Task
	onDelete: (id:string) => void
	onUpdate: (id:string, status:'created'|'done') => void
}

export function Task({ task, onUpdate, onDelete }:TaskProps) {
  const hasCompleted = task.status === 'done'

  return (
	  <View style={styles.taskCardWrapper}>
		  <TouchableHighlight
			  style={{
				  ...styles.checkbox,
					borderColor: hasCompleted ?
					colors.purple[500] :
					colors.blue[500]
				}}
				onPress={() => onUpdate(
				  task.id,
					hasCompleted?'created':'done'
				)}
			>
			  <View
				  style={{
					  ...styles.checkboxThumb,
						opacity: hasCompleted ? 1 : 0
					}}
				/>
			</TouchableHighlight>
	
			<View style={styles.cardTextWrapper}>
			  <Text
				  style={
					  hasCompleted ?
						styles.cardDoneText :
						styles.cardText
					}
				>
				  {task.description}
				</Text>
			</View>
	
			<TouchableHighlight
			  style={styles.buttonDelete}
				onPress={() => onDelete(task.id)}
			>
			  <MaterialCommunityIcons
				  name="trash-can-outline"
					size={24}
				  color={colors.gray[300]}
				/>
			</TouchableHighlight>
		</View>
	)
}
