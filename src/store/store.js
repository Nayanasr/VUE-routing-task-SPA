import {createStore} from 'vuex'


let store= createStore({
    state() {
        return{
          userData:[]
            
        }

    },
   mutations:{
    fetchData(state,payload) {
      state.userData=payload

    }
   },
    
        actions: {
          async fetchData(context) {
            try {
              let res = await fetch("https://ty-shop.herokuapp.com/api/products");
              let data = await res.json();
              console.log("data", data.products);
              context.commit("fetchData",data.products)// send it to mutations


            } catch (err) {
              console.log("error", err);
            }
          },
        },
       
    })
    export default store;