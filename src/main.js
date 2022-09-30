import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import store from './store/store.js'

 import BaseCard from './components/BaseCard.vue'
 

//import HomeComp from "./components/HomeComp"
//import OfficeComp from "./components/OfficeComp"

import HomeOne from "./components/HomeOne"
import LoginForm from "./components/LoginForm"

import SignUp from "./components/SignUp"




let router= createRouter ({
    history: createWebHistory(),//to remember the previous pages using browser history
routes:[
    {
        path:"/",
        component:HomeOne
    },
    {
        path:"/login",
        component:LoginForm
    },
    {
        path:"/signup",
        component:SignUp
    },

]
})

let app=createApp(App)
app.component("base-card",BaseCard)
app.use(store)
app.use(router)
app.mount('#app')
