import { defineStore } from "pinia";
import axios from "axios";
const devRuta = import.meta.env.VITE_APP_RUTA_API

export const useLoginStore = defineStore("LoginStore",{
    state: () => {
        return{
            authUser:null
        }
    },
    getters:{
        getAuthUser: (state) => {
            return state.authUser;
        }
    },
    actions:{

    }
})