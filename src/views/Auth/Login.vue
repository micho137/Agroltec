<template>
  <div
    class="min-w-screen min-h-screen bg-secondary-content flex items-center justify-center px-5 py-5"
  >
    <img
      class="object-cover fixed top-0 left-0 z-index-1 w-full h-full"
      src="../../assets/images/wall.png"
    />
    <div
      class="text-gray-500 rounded-3xl w-full overflow-hidden fixed shadow-lg"
      style="max-width: 1000px"
    >
      <div class="md:flex-col w-full justify-center items-center">
        <div
          class="md:flex h-10 bg-primary py-10 px-10 justify-center items-center bg-opacity-25 backdrop-blur-sm"
        >
          <img v-on:click="navigateHome()" class="h-20 cursor-pointer" src="../../assets/images/zyro-image.png" />
        </div>
        <div class="py-10 px-5 md:px-10 bg-gray-100">
          <div class="text-center mb-10">
            <h1 class="font-bold text-3xl text-gray-900">INICIO DE SESION</h1>
            <span class="text-primary uppercase font-bold">Agroltec</span>
          </div>
          <div>
            <div class="flex -mx-3">
              <div class="w-full px-3 mb-5">
                <label for="" class="text-md font-semibold px-1">Email</label>
                <div class="flex">
                  <div
                    class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                  >
                    <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    type="email"
                    class="input input-bordered input-primary w-full -ml-10 pl-10 pr-3"
                    placeholder="example@example.com"
                    v-model="correo"
                  />
                </div>
              </div>
            </div>
            <div class="flex -mx-3">
              <div class="w-full px-3 mb-12">
                <label for="" class="text-md font-semibold px-1"
                  >Contraseña</label
                >
                <div class="flex">
                  <div
                    class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                  >
                    <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    type="password"
                    class="input input-bordered input-primary w-full -ml-10 pl-10 pr-3"
                    placeholder="************"
                    v-model="contrasena"
                  />
                </div>
              </div>
            </div>
            <div class="flex -mx-3">
              <div class="w-full px-3 mb-5">
                <button
                  class="btn btn-primary font-bold block w-full max-w-xs mx-auto"
                  v-on:click="login()"
                >
                  INICIAR SESION
                </button>
                <a class="text-md"
                  >¿No tienes una cuenta?
                  <span
                    v-on:click="handleRegister()"
                    class="text-primary cursor-pointer"
                    >Registrate aqui</span
                  ></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css");
</style>

<script>
import axios from "axios";
const BASE_URL = import.meta.env.VITE_APP_RUTA_API;
export default {
  data: () => {
    return {
      correo: "",
      contrasena: "",
    };
  },
  methods: {
    showAlert() {
      this.$swal({
        position: "top-end",
        icon: "success",
        title: "Inicio de sesion exitoso",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    showFailAlert() {
      this.$swal({
        icon: "warning",
        title: "Debes completar todos los campos",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    handleClean() {
      this.correo = "";
      this.contrasena = "";
    },
    login() {
      axios
        .post(BASE_URL + "/usuarios", {
          correo: this.correo,
          contrasena: this.contrasena,
        })
        .then((response) => {
          this.showAlert();
          setTimeout(() => {
              this.$router.push("/");
            }, 2000);
        })
        .catch((error) => {
          this.showFailAlert()
        });
    },
    handleRegister() {
      this.$router.push("/register");
    },
    navigateHome() {
      this.$router.push("/");
    }
  },
};
</script>
