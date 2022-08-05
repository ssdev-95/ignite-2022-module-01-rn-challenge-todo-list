import { StyleSheet } from 'react-native'
import {colors} from '../../assets/colors'

export const styles = StyleSheet.create({
	tasksInfoContainer: {
		width: 411,
		maxWidth: '100%',
		paddingHorizontal: 16,
		marginVertical: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	tasksInfoWrapper: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	numberBadge: {
		width: 28,
		height: 20,
		borderRadius: 100,
		backgroundColor: colors.gray[300],
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 8
	},
	numberBadgeText: {
		color: colors.gray[100],
		textAlign: 'center',
		textAlignVertical: 'center',
		marginBottom: 4
	},
	taskNumberText: {
		display: 'flex',
		alignItems: 'center',
		color: colors.blue[500]
	},
	taskDoneNumberText: {
		display: 'flex',
		alignItems: 'center',
		color: colors.purple[500]
	},
	emptyTaskTitle: {
		color: colors.gray[300],
		marginTop: 16,
		marginBottom: 4
	},
	emptyTaskText: {
		color: colors.gray[400]
	},
	tasksContainer: {
		width: 411,
		maxWidth: '100%',
		paddingHorizontal: 16,
		alignItems: 'center'
	}
})
