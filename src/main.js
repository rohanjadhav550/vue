import { createApp, ref } from 'vue'
const count = ref(0)
//simple app
const app = createApp({
    setup() {
        return {
            count
        }
    }
})
app.mount('#app')

//second app
const app2 = createApp({
    setup() {
        return {
            count
        }
    }
})

app2.mount('#app1')

//app with template
const app3 = createApp({
    template: `<h1>Raw HTML</h1>`,
    setup() {
    }
})

app3.mount('#app2')

//app with data and methods
const app4 = createApp({
    data() {
        return {
            name: 'Rohan',
            age: 27,
            job: 'Software Engineer',
        }
    },

    methods: {
        changeName(name) {
            this.name = name
        },
        changeAge(age) {
            this.age = age
        },
        changeJob(job) {
            this.job = job
        }
    }
})
app4.mount('#app3')

// bind directive
const app5 = createApp({

    data(){
        return {
            name: 'Rohan',
            style: 'background-color: red; color: white;',
            id: 'app4'
        }
    },

    methods:{
        changeName(name){
            this.name = name
        }
    }
})
app5.mount('#app4')

//expressions
const app6 = createApp({
    data(){
        return {
            condition: true,
            style: 'background-color: green; color: white;'
        }
    },

    methods: {
        changeCondition(){
            this.condition = !this.condition
            this.style = this.condition ? 'background-color: green; color: white;' : 'background-color: red; color: white;'
        }

    }
})
app6.mount('#app5')

//v-if
const app7 = createApp({
    data(){
        return {
            seen: true
        }
    },

    methods: {
        changeSee(){
            this.seen = !this.seen
        }
    }
}).mount('#app6')

const app8 = createApp({
    data(){
        const count = ref(0)
        return {
            count
        }
    },

    methods: {
        increment(){
            this.count++
        }
    },
    
    mounted(){
        console.log('mounted', this.count)
    }
})

app8.mount('#app7')
