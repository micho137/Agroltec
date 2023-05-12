import { defineStore } from "pinia";
import router from "@/router";
import axios from "axios";
const axiosConfig = {
  'Content-Type':'application/json;charset=UTF-8',
  "Acces-Control-Allow-Origin":"*",
  'Acces-Control-Allow-Methods':'*'
}
const devRuta = import.meta.env.VITE_APP_RUTA_API;
axios.defaults.baseURL=devRuta
axios.defaults.headers.common = axiosConfig

const mockUser = {
  "id": 1,
  "nombre": "Bendite",
  "apellido": "Lapslie",
  "direccion": "0 Grayhawk Way",
  "usuario": "blapslie0",
  "password": "I35lPFigJW",
  "rol": "ADMIN",
  "correo": "blapslie0@hubpages.com",
  "identificacion": 363704
}

export const useLoginStore = defineStore("LoginStore", {
  state: () => {
    return {
      authUser: mockUser,
    };
  },
  getters: {
    getAuthUser: (state) => {
      return state.authUser;
    },
  },
  actions: {
    async vLogin(payload) {
      const data = await axios.post(devRuta + "/usuarios", payload);
      this.authUser = data.data
    },
    logout(alert){
        this.authUser=null
        if(this.authUser===null){
            alert()
            setTimeout(()=>{
                router.push('/login')
            },2000)
        }
    }
  },
  persist: true,
});
