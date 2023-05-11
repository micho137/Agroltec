import { defineStore } from "pinia";
import axios from "axios";
const devRuta = import.meta.env.VITE_APP_RUTA_API;

export const useProductStore = defineStore("ProductStore",{
    state:()=>({
        products:[],
    }),
    getters:{
        getProducts:(state)=>{
            return state.products;
        }
    },
    actions:{
        async fetchProducts(){
            const response = await axios.get(devRuta+"/productos")
            this.$state.products = response.data
        }
    }
})