import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router";
const devRuta = import.meta.env.VITE_APP_RUTA_API;

export const useLoginStore = defineStore("LoginStore", {
  state: () => {
    return {
      authUser: null,
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
            alert
            setTimeout(()=>{
                router.push('/login')
            },2000)
        }
    }
  },
  persist: true,
});
