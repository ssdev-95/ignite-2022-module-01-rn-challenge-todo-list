import { StyleSheet } from 'react-native'
import { colors } from '../../assets/colors'

export const styles = StyleSheet.create({
	taskCardWrapper: {
		width: 411,
		maxWidth: '100%',
		height: 64,
		borderRadius: 6,
		backgroundColor: colors.gray[500],
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 12,
		marginBottom: 8
	},
	buttonDelete: {
		height: 24,
		width: 24,
		alignItems: 'center',
		justifyContent: 'center'
	},
	checkbox: {
		borderWidth: 3,
		borderRadius: 30,
		width: 24,
		height: 24,
		padding: 4,
		alignItems: 'center',
		justifyContent: 'center'
	},
	checkboxThumb: {
		height: '100%',
		width: '100%',
		borderRadius: 100,
		backgroundColor: colors.purple[500]
	},
	cardTextWrapper: {
		flex: 1,
		height: '100%',
		alignItems: 'flex-start',
		justifyContent: 'center',
		marginHorizontal: 16
	},
	cardText: {
		color: colors.gray[100]
	},
	cardDoneText: {
		color: colors.gray[300],
		textDecorationLine: 'line-through'
	}
})
