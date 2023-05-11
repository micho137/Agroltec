import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router";
const devRuta = import.meta.env.VITE_APP_RUTA_API;
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
