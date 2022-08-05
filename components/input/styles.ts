import { StyleSheet } from 'react-native'
import { colors } from '../../assets/colors'

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
  },
  button: {
    backgroundColor: colors.blue[500],
  },
  buttonText: {
    color: colors.gray[100],
  },
})
