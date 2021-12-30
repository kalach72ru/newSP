var app = new Vue({
  el: '#app',
  data: {
	message: 'Привет',
	name: "Виктор",
	navs: [
	    {
	        id: 1,
            name: 'First',
            active: true,
            disabled: false
	    },
	    {
	        id: 2,
            name: 'Sec',
            active: false,
            disabled: false
	    },
        {
            id: 3,
            name: 'Три',
            active: false,
            disabled: false
        }

	]
  },
  methods: {
    clicktab: function(event){
        if(event){
            for (item in this.navs){
                item.active = false
            }
//            var punct =
            this.navs[event.target.id-1].active = true

//            punct.active = true
//            console.log(event.target.id)
//            console.log(this.navs[event.target.id-1])

        }
    }
  }
})
