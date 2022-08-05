import { StatusBar } from 'expo-status-bar'
import {colors} from './assets/colors'

import { Background } from './components/background'
import { Header } from './components/header'
import { Input } from './components/input'

import { Tasks } from './components/task-list'

interface TaskType {
  id:string
	description:string
}

export default function App() {
  const tasks:TaskType[] = []
  return (
	  <Background>
		  <Header />
			 <Input />

			<Tasks tasks={tasks} />

			<StatusBar
			  style="light"
				translucent
				backgroundColor={colors.gray[700]}
			/>
		</Background>
  )
}
