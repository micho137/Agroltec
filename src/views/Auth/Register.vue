<template>
  <div
    class="min-w-screen min-h-screen bg-secondary-content flex items-center justify-center px-5 py-5"
  >
    <img
      class="object-cover fixed top-0 left-0 z-index-1 w-full h-full"
      src="../../assets/images/wall.png"
    />
    <div
      class="text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden fixed"
      style="max-width: 1000px"
    >
      <div class="md:flex w-full">
        <div
          v-on:click="pushHome()"
          class="cursor-pointer hidden md:block w-1/2 bg-primary py-10 px-10 justify-center items-center bg-opacity-25 backdrop-blur-sm"
        >
          <img src="../../assets/images/zyro-image.png" />
          <h2 class="font-bold text-center text-4xl text-secondary font-sans">
            -AGROLTEC-
          </h2>
        </div>
        <div class="w-full md:w-1/2 py-10 px-5 md:px-10 bg-gray-100">
          <div class="text-center mb-10">
            <h1 class="font-bold text-3xl text-gray-900">REGISTRO</h1>
            <p class="text-md">
              Ingrese la informacion para nuevo usuario de
              <span class="text-primary uppercase font-bold">Agroltec</span>.
            </p>
          </div>
          <div>
            <div class="flex -mx-3">
              <div class="w-1/2 px-3 mb-5">
                <label for="" class="text-md font-semibold px-1">Nombres</label>
                <div class="flex">
                  <div
                    class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                  >
                    <i
                      class="mdi mdi-account-outline text-gray-400 text-lg"
                    ></i>
                  </div>
                  <input
                    type="text"
                    class="input input-bordered input-primary w-full -ml-10 pl-10 pr-3"
                    v-model="Nombres"
                  />
                </div>
              </div>
              <div class="w-1/2 px-3 mb-5">
                <label for="" class="text-md font-semibold px-1"
                  >Apellidos</label
                >
                <div class="flex">
                  <div
                    class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                  >
                    <i
                      class="mdi mdi-account-outline text-gray-400 text-lg"
                    ></i>
                  </div>
                  <input
                    type="text"
                    class="input input-bordered input-primary w-full -ml-10 pl-10 pr-3 py-2"
                    v-model="Apellidos"
                  />
                </div>
              </div>
            </div>
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
                    v-model="Correo"
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
                    v-model="Contrasena"
                  />
                </div>
              </div>
            </div>
            <div class="flex -mx-3">
              <div class="w-full px-3 mb-5">
                <button
                  class="btn btn-primary font-bold block w-full max-w-xs mx-auto"
                  v-on:click="handleRegister()"
                >
                  REGISTRARSE
                </button>
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
      Nombres: "",
      Apellidos: "",
      Correo: "",
      Contrasena: "",
    };
  },
  methods: {
    pushHome(){
      this.$router.push('/')
    },
    showAlert() {
      this.$swal({
        position: "top-end",
        icon: "success",
        title: "Usuario creado con exito",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    showFailAlert() {
      this.$swal({
        icon: "warning",
        title: "Algo salio mal",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    showFailAlert2() {
      this.$swal({
        icon: "warning",
        title: "Debes completar todos los datos",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    handleClean() {
      this.Nombres = "";
      this.Apellidos = "";
      this.Correo = "";
      this.Contrasena = "";
    },
    handleRegister() {
      if (
        this.Nombres !== "" &&
        this.Apellidos !== "" &&
        this.Correo !== "" &&
        this.Contrasena !== ""
      ) {
        axios
          .post(BASE_URL + "/usuarios", {
            nombres: this.Nombres,
            apellidos: this.Apellidos,
            correo: this.Correo,
            contrasena: this.Contrasena,
          })
          .then(() => {
            this.handleClean();
            this.showAlert();
            setTimeout(() => {
              this.$router.push('/login')
            }, 2000);
          });
      }else{
        this.showFailAlert2()
      }
    },
  },
};
</script>
