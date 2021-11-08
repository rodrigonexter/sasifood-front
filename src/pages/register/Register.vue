<template>
  <v-main>
    <v-container fluid>
      <v-row>
        <v-col cols="2">
          <v-btn class="ma-2" color="black" dark to="/" text>
            <v-icon dark left > mdi-arrow-left </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="10">
          <div class="d-flex align-end
">
            <v-icon large color="black">mdi-shopping</v-icon>
            <h1>Cadastrar novo produto</h1>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <form ref="form">
            <div id="step-1" v-show="stepForm == 1">
              <div>
                <span>Etapa 1 de 2</span>
              </div>
              <div>
                <v-text-field
                  v-model="product.name"
                  label="Nome do produto"
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="product.description"
                  label="Descrição"
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="product.price"
                  label="Valor (R$)"
                  outlined
                ></v-text-field>
                <v-select
                  v-model="product.category"
                  :items="product.items"
                  label="Categoria"
                  outlined
                ></v-select>

                <h3>Para quantas pessoas?</h3>
                <v-radio-group v-model="product.count_serves" column>
                  <v-radio
                    label="Serve 1 pessoa"
                    value="Serve 1 pessoa"
                  ></v-radio>
                  <v-radio
                    label="Serve 2 pessoas"
                    value="Serve 2 pessoas"
                  ></v-radio>
                </v-radio-group>

                <h3>Disponibilidade do produto para o público</h3>
                <v-radio-group v-model="product.is_available" column>
                  <v-radio label="Disponível" value="true"></v-radio>
                  <v-radio label="Indisponível" value="false"></v-radio>
                </v-radio-group>
              </div>
              <div class="d-flex justify-end">
                <v-btn color="primary" @click="nextStepForm()"> Próximo </v-btn>
              </div>
            </div>

            <div id="step-2" v-show="stepForm == 2">
              <div>
                <span> Etapa 2 de 2</span>
              </div>
              <span>Selecionar a foto do produto</span>
              <div class="d-flex flex-column align-center">
                
                <DragImage/>
              
              </div>
              <div class="d-flex justify-space-between actionButtons">
                <v-btn color="primary" outlined @click="backStepForm()">
                  voltar
                </v-btn>
                <v-btn color="primary" @click="registerProduct()">
                  Cadastrar
                </v-btn>
              </div>
            </div>
          </form>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { routes } from "../../routes.js";
import { createProduct } from "../../services/api";
import { readCategories } from "../../services/api";
import DragImage from "../../components/shared/DragImage.vue"

export default {
  components: {
    DragImage
  },

  data() {
    return {
      File: [],
      stepForm: 1,
      itemsAux: "",
      routes,
      product: {
        name: "",
        count_serves: "",
        category: {
          _id: "",
          name: "",
          label: "",
        },
        image: "",
        is_available: true,
        is_on_sale: false,
        price: "",
        description: "",
        items: [],
      },
    };
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },

    registerProduct() {
      const product = this.product;
      createProduct(product);
      console.log("cadastrando");
    },
    getCategories() {
      readCategories().then(({ data }) => {
        this.product.items = data.map((item) => {
          return {
            text: item.name,
            value: item._id,
          };
        });
      });
    },

    nextStepForm() {
      this.stepForm = 2;
    },
    backStepForm() {
      this.stepForm = 1;
    }
  },
  mounted() {
    this.getCategories();
  },
};
</script>

<style lang="scss" scoped>

.actionButtons {
  margin-top: 10px;
}

h1{
  font-size: 20px;
  font-weight: 500;
}
</style>