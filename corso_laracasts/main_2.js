Vue.component('message', {
	props: ['title', 'body'],
	data() {
		return {
			isVisible: true
		}
	},
	template: `
	<article class="message" v-show="isVisible">
		<div class="message-header">
			<p>{{ title }}</p>
			<button class="delete" aria-label="delete" @click="hide"></button>
		</div>
		<div class="message-body">
			{{ body }}
		</div>
	</article>
	`,
	methods: {
		hide() {
			this.isVisible = false;
		}
	}
})

Vue.component('modal', {
	template: `
	<div class="modal is-active">
		<div class="modal-background"></div>
		<div class="modal-content">
			<slot></slot>
		</div>
		<button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
	</div>
	`,
})

Vue.component('tabs', {
	template: `
	<div>
		< div class="tabs" >
			<ul>
				<li class="is-active"><a>Pictures</a></li>
				<li><a>Music</a></li>
				<li><a>Videos</a></li>
				<li><a>Documents</a></li>
			</ul>
		</div >

		<div class="tabs-details">

			<slot></slot>

		</div>
	</div>
	`,
})

Vue.component('tab', {
	template: `
		<div class="tab">

			<slot></slot>

		</div>
	`,
})

new Vue({
	el: '#root',
	data: {
		showModal: false,
	},
	methods: {
		control() {
			alert('ok');
		}
	}
})


