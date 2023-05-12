<template>
  <div
    class="w-full h-full bg-[url('../assets/images/wall.png')] object-cover flex justify-evenly items-center"
  >
    <div
      class="overflow-y-scroll max-h-[700px] min-w-[900px] border-2 border-primary rounded-t-xl"
    >
      <table class="flex flex-col justify-center items-center">
        <thead class="sticky top-0 bg-primary text-white rounded-t-lg w-full">
          <tr class="flex justify-evenly items-center">
            <th class="px-4 py-2">ID</th>
            <th class="px-4 py-2">Imagen</th>
            <th class="px-4 py-2">Nombre</th>
            <th class="px-4 py-2">Precio</th>
            <th class="px-4 py-2">Funcion</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-primary bg-white w-full">
          <tr
            class="flex justify-evenly items-center"
            v-for="(producto, index) in store.getProducts"
            :key="index"
          >
            <td class="px-4 py-2">{{ producto.id }}</td>
            <td class="px-4 py-2 flex justify-center items-center">
              <img
                class="h-24 w-20"
                :src="producto.imagen"
                :alt="producto.name"
              />
            </td>
            <td class="px-4 py-2">{{ producto.name }}</td>
            <td class="px-4 py-2">${{ producto.price }}</td>
            <td class="px-4 py-2">
              <div class="flex flex-col gap-y-3">
                <button
                  @click="
                    showEditAlert(
                      producto.id,
                      producto.imagen,
                      producto.stock,
                      producto.description,
                      producto.name,
                      producto.price,
                      index
                    )
                  "
                  class="btn btn-primary"
                >
                  Editar
                </button>
                <button class="btn btn-warning">Eliminar</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css");
</style>

<script>
import { useProductStore } from "../../stores/ProductStore";
import { ref } from "vue";

export default {
  methods: {
    showEditAlert(id, imagen, stock, description, name, price, index) {
      const data = { id, imagen, stock, description, name, price };

      this.$swal({
        title: "Editar Producto",
        html:
          `<div style="display:flex;justify-content:center;flex-direction:column;margin-bottom: 10px"><label><strong>Nombre del Producto</strong></label><input style="text-align:center" value='${data.name}' placeholder="Nombre del Producto" id="swal-input1" class="swal2-input"></div>` +
          `<div style="display:flex;justify-content:center;flex-direction:column;margin-bottom: 10px"><label><strong>Imagen del Producto(URL)</strong></label><input style="text-align:center" value='${data.imagen}' placeholder="Imagen del Producto" id="swal-input2" class="swal2-input"></div>` +
          `<div style="display:flex;justify-content:center;flex-direction:column;margin-bottom: 10px"><label><strong>Precio del Producto</strong></label><input style="text-align:center" value='${data.price}' placeholder="Precio del Producto" id="swal-input3" class="swal2-input"></div>`,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: "Editar",
        confirmButtonColor: "#519903",
        preConfirm: () => {
          if (
            document.getElementById("swal-input1").value === "" ||
            document.getElementById("swal-input2").value === "" ||
            document.getElementById("swal-input3").value === ""
          ) {
            this.$swal({
              icon: "error",
              title: "Los campos no pueden estar vacios",
              text: "Debes llenar todos los campos",
              showConfirmButton: false,
              timer: 2000,
            });
          } else {
            return [
              (data.name = document.getElementById("swal-input1").value),
              (data.imagen = document.getElementById("swal-input2").value),
              (data.price = document.getElementById("swal-input3").value),
              this.store.editProduct(index, data),
              (this.editedProduct = this.store.products[index]),
            ];
          }
        },
      });
    },
  },
  setup() {
    const store = useProductStore();
    store.fetchProducts();

    const editedProduct = ref(null);

    return {
      store,
      editedProduct,
    };
  },
};
</script>
