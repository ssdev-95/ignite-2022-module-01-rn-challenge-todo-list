declare namespace TodoList {
	export interface Task {
		id:string
		description:string,
		status: 'created' | 'done'
	}
}
