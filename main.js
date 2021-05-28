const app = new Vue({
    el: "#app",
    data: {
        url: "https://flynn.boolean.careers/exercises/api/random/mail",
        emails: [],
    },
    methods: {

    },

    mounted() {

        //AXIOS 
        for (let i = 0; i < 10; i++) {
            axios.get(this.url).then(rep => {
                //console.log(rep.data.response);
                let mail = rep.data.response;
                this.emails.push(mail);
                //console.log(this.emails);
            })
        }


    },
})


/*



*/