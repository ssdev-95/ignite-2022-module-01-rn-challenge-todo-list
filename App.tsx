import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { v4 as uuid } from 'uuid'
import {colors} from './assets/colors'

import { Background } from './components/background'
import { Header } from './components/header'
import { Input } from './components/input'
import { Tasks } from './components/task-list'

type TaskType = TodoList.Task

export default function App() {
  const [tasks, setTasks] = useState<TaskType[]>([{
	  id:'28ddjw2iwiafno',
		description: 'Autobots, lets rollout.',
		status: 'created'
	}])

	function createTask(task:string) {
	  const newTask:TaskType = {
		  id: uuid(),
			description: task,
			status: 'created'
		}

		setTasks(prev => [...prev, newTask])
	}

	function deleteTask(id:string) {
	 const filtered = tasks.filter(
	   task => task.id !== id
	 )

	 setTasks(filtered)
	}

	function updateTask(id:string, status:'created'|'done') {
	  const updated = tasks.map(task => {
		  if(task.id === id) {
			  return {
				  ...task,
					status
				}
			}

			return task
		})

		setTasks(updated)
	}

  return (
	  <Background>
		  <Header />

			<Input onCreate={createTask} />

			<Tasks
			  tasks={tasks}
				onDelete={deleteTask}
				onUpdate={updateTask}
			/>

			<StatusBar
			  style="light"
				translucent
				backgroundColor={colors.gray[700]}
			/>
		</Background>
  )
}
