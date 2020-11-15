<template>
  <form @submit.prevent="procesarFormulario">
    <!-- <input
      type="text"
      class="my-4 form-control"
      placeholder="Type a name"
      v-model.trim="tarea.nombre"
    />

    <div class="form-check form-check-inline">
      <input
        type="checkbox"
        id="check-1"
        class="form-check-input"
        v-model="tarea.categorias"
        value="Javascript"
      />
      <label for="check-1" class="form-check-label">Javascript</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        type="checkbox"
        id="check-2"
        class="form-check-input"
        v-model="tarea.categorias"
        value="node js"
      />
      <label for="check-2" class="form-check-label">Node.js</label>
    </div>
    <div class="mt-2">
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="radio1"
          value="urgente"
          v-model="tarea.estado"
        />
        <label class="form-check-label" for="radio1">Urgente</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="radio2"
          value="relax"
          v-model="tarea.estado"
        />
        <label class="form-check-label" for="radio2">Relax</label>
      </div>
    </div>
    <div class="mt-2">
      <input
        class="form-control"
        type="text"
        name=""
        id=""
        v-model.number="tarea.numero"
      />
    </div> -->
    <Input :tarea="tarea" />
  </form>
  <hr />
  <ListarTareas />
</template>

<script>
// @ is an alias to /src
import Input from "../components/Input";
import ListarTareas from "../components/ListaTareas";
import { mapActions } from "vuex";
const shortId = require("shortid");
export default {
  name: "Home",
  components: {
    Input,
    ListarTareas,
  },
  data() {
    return {
      tarea: {
        id: "",
        nombre: "",
        categorias: [],
        estado: "",
        numero: 0,
      },
    };
  },
  methods: {
    ...mapActions(["setTareas"]),
    procesarFormulario() {
      console.log(this.tarea);
      if (this.tarea.nombre.trim() === "") {
        console.log("empty");
        return;
      }
      console.log("not empty");
      // generating Ids
      this.tarea.id = shortId.generate();
      console.log(this.tarea.id);

      // Sending data
      this.setTareas(this.tarea);

      // Cleaning data
      this.tarea = {
        id: "",
        nombre: "",
        categorias: [],
        estado: "",
        numero: 0,
      };
    },
  },
};
</script>
