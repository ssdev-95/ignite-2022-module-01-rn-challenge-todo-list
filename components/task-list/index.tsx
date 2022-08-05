import { View, Text, FlatList, ScrollView } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { styles } from "./styles";
import {colors} from "../../assets/colors";
import { Task } from "../task";

type TaskListProps = {
  tasks: any[]
	onDelete: (id:string) => void
	onUpdate: (id:string, status:'created'|'done') => void
}

export function Tasks({ tasks, onUpdate, onDelete }:TaskListProps) {
  const tasksDoneNumber = tasks.filter(
	  (task) => task.status === 'done'
	).length

  return (
	  <>
		  <View style={styles.tasksInfoContainer}>
		    <View style={styles.tasksInfoWrapper}>
  		    <Text style={styles.taskNumberText}>
  			    Created
     			</Text>
	  			<View style={styles.numberBadge}>
		   		  <Text style={styles.numberBadgeText}>
						  {tasks.length}
						</Text>
				  </View>
  			</View>

	  		<View style={styles.tasksInfoWrapper}>
		  	  <Text style={styles.taskDoneNumberText}>
			  	  Done
				  </Text>

 	  	  	<View style={styles.numberBadge}>
  				  <Text style={styles.numberBadgeText}>
						  {tasksDoneNumber}
						</Text>
			  	</View>
   			</View>
  		</View>

  		<View style={{
			  ...styles.tasksContainer,
				paddingTop: tasks.length ? 4 : 16
			}}>
  		  {!tasks.length ? (
	  		  <>
		  		  <MaterialCommunityIcons
			  		  name="clipboard-list-outline"
					  	size={64}
  						color={colors.gray[400]}
	  				/>
						<Text style={styles.emptyTaskTitle}>
						  You don't have any tasks registered.
						</Text>
						<Text style={styles.emptyTaskText}>
						  Create tasks and organize your todo's
						</Text>
		  		</>
			  ) : (
			    <FlatList
					   data={tasks}
						 keyExtractor={(task) => task.id}
						 renderItem={({ item }) => (
						   <Task
							   task={item}
								 onDelete={onDelete}
								 onUpdate={onUpdate}
							 />
						 )}

						 showsVerticalScrollIndicator={false}
					/>
			  )}
  		</View>
		</>
	)
}
