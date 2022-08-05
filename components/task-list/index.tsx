import { View, Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { styles } from "./styles";
import {colors} from "../../assets/colors";

type TaskListProps = {
  tasks: any[]
}

export function Tasks({ tasks }:TaskListProps) {
  return (
	  <>
		  <View style={styles.tasksInfoContainer}>
		    <View style={styles.tasksInfoWrapper}>
  		    <Text style={styles.taskNumberText}>
  			    Tasks
     			</Text>
	  			<View style={styles.numberBadge}>
		   		  <Text style={styles.numberBadgeText}>0</Text>
				  </View>
  			</View>

	  		<View style={styles.tasksInfoWrapper}>
		  	  <Text style={styles.taskDoneNumberText}>
			  	  Done
				  </Text>

 	  	  	<View style={styles.numberBadge}>
  				  <Text style={styles.numberBadgeText}>0</Text>
			  	</View>
   			</View>
  		</View>

  		<View>
  		  {!tasks.length ? (
	  		  <>
		  		  <MaterialCommunityIcons
			  		  name="clipboard-list-outline"
					  	size={42}
  						color={colors.gray[300]}
	  				/>
		  		</>
			  ) : (
			    <Text>Top</Text>
			  )}
  		</View>
		</>
	)
}
