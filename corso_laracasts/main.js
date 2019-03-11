

Vue.component('task-list', {
	template: `
	
	<div>

		<task v-for="task in tasks">{{ task.description }}</task>

	</div>

	`,
	data() {
		return {
			tasks: [
				{ description: 'go to the store', completed: false },
				{ description: 'run', completed: false },
				{ description: 'gym', completed: false },
				{ description: 'do homeworks', completed: false },
			]
		}	
	}
})

Vue.component('task', {
	template: '<li><slot></slot></li>'
})

new Vue({
	el: '#root',
})