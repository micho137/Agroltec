<template>
  <div
    class="bg-[url('../assets/images/agronomia.jpg')] bg-cover w-full h-full fixed flex justify-center items-center"
  >
    <div class="container mx-auto mt-10">
      <div class="flex shadow-md h-[750px] mb-16">
        <div class="flex flex-col w-3/4 bg-white px-10 py-10 rounded-l-xl h-full">
          <div class="flex justify-between border-b pb-8">
            <h1 class="font-semibold text-2xl">Carrito de compras</h1>

            <h2 class="font-semibold text-2xl">{{ data.countCartItems }} Productos</h2>
          </div>
          <div class="flex mt-10 mb-5 pl-10">
            <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Detalle del producto
            </h3>
            <h3
              class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center"
            >
              Cantidad
            </h3>
            <h3
              class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center"
            >
              Precio
            </h3>
            <h3
              class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center"
            >
              Total
            </h3>
          </div>
          <div class="pl-10 h-full overflow-y-scroll overflow-x-hidden">
            <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" v-for="item in data.getCartItems" :key="item.id">
            <div class="flex w-2/5">
              <div class="w-20">
                <img
                  class="h-24"
                  :src="item.imagen"
                  :alt="item.name"
                />
              </div>
              <div class="flex flex-col justify-between ml-4">
                <span class="font-bold text-sm">{{ item.name }}</span>
                <a
                @click="data.removeFromCart(item)"
                  href="#"
                  class="font-semibold hover:text-red-500 text-gray-500 text-xs"
                  >Eliminar</a
                >
              </div>
            </div>

            <div class="flex justify-center w-1/5">
              <svg @click="data.decrementQ(item)" class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                <path
                  d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                />
              </svg>

              <input
                class="mx-2 border text-center w-8"
                type="text"
                :value="item.quantity"
                disabled
              />

              <svg @click="data.incrementQ(item)" class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                <path
                  d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                />
              </svg>
            </div>
            <span class="text-center w-1/5 font-semibold text-sm">${{ item.price }}</span>
            <span class="text-center w-1/5 font-semibold text-sm">${{ item.price * item.quantity}}</span>
          </div>
          </div>

          <a href="/productos" class="flex font-semibold text-primary text-sm mt-10">
            <svg
              class="fill-current mr-2 text-primary-focus w-4"
              viewBox="0 0 448 512"
            >
              <path
                d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"
              />
            </svg>
            Continuar comprando
          </a>
        </div>

        <div
          id="summary"
          class="w-1/4 px-8 py-10 bg-primary rounded-r-xl text-white"
        >
          <h1 class="font-semibold text-2xl border-b pb-8">Detalles Carrito</h1>
          <div class="flex justify-between mt-10 mb-5">
            <span class="font-semibold text-lg uppercase">{{ data.countCartItems }} Productos</span>
          </div>
          <div class="border-t mt-8">
            <div class="flex font-bold justify-between py-6 text-lg uppercase">
              <span>Precio Total</span>
              <span>${{ data.cartItems.reduce((acc,item) => acc += item.price * item.quantity,0) }}</span>
            </div>
            <button
              class="bg-secondary font-bold hover:bg-secondary-focus py-3 text-sm text-primary-focus uppercase w-full"
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useProductStore } from "../../stores/ProductStore";
export default {
  setup() {
    const data = useProductStore();
    return {
      data,
    };
  },
};
</script>
