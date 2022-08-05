import { StyleSheet } from 'react-native'
import { colors } from '../../assets/colors'

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
		width: 411,
		maxWidth: '100%',
		paddingHorizontal: 16,
		marginTop: -30,
		marginHorizontal: 'auto'
  },
  input: {
    flex: 1,
		height: 56,
		borderRadius: 6,
		marginRight: 16,
		paddingHorizontal: 12,
		color: colors.gray[200],
		backgroundColor: colors.gray[500]
  },
  button: {
    backgroundColor: colors.blue[500],
		width: 56,
		height: 56,
		borderRadius: 6,
		alignItems: 'center',
		justifyContent: 'center'
  }
})
