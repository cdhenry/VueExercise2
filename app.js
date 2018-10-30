new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            alert: function() {
                alert("Alert!")
            },
            changeData: function(event){
                this.value = event.target.value
            }
        }
    });