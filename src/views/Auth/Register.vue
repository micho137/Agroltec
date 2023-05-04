<template>
  <div
    class="min-w-screen min-h-screen bg-secondary-content flex items-center justify-center px-5 py-5"
  >
  <img class="object-cover fixed top-0 left-0 z-index-1 w-full h-full" src="../../assets/images/wall.png" />
    <div
      class=" text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden fixed"
      style="max-width: 1000px"
    >
      <div class="md:flex w-full">
        <div class="hidden md:block w-1/2 bg-primary py-10 px-10 justify-center items-center bg-opacity-25 backdrop-blur-sm">
            <img src="../../assets/images/zyro-image.png"/>
            <h2 class="font-bold text-center text-4xl text-secondary font-sans">-AGROLTEC-</h2>
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
                  />
                </div>
              </div>
            </div>
            <div class="flex -mx-3">
              <div class="w-full px-3 mb-5">
                <button class="btn btn-primary font-bold block w-full max-w-xs mx-auto">
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
