new Vue({
        el: '#exercise',
        data: {
            value: '',
            value_2: ''
        },
        methods: {
            clickAlert: function () {
              alert('alert');
            },
            listenKey: function () {
                this.value = event.target.value;
            },
            listenEnter: function () {
                this.value_2 = event.target.value;
            },
        }
    });