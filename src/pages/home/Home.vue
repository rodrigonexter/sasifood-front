<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
            <ul class="d-flex justify-center">
              <li v-for="(categorie, index) in categories" :key="index">
                <v-btn
                  class="ma-2"
                  outlined
                  color="colorGray"
                  small
                  @click="getProductsFromFilter(categorie._id)"
                >
                  {{ categorie.name }}
                </v-btn>
              </li>
              <v-btn
                class="ma-2"
                outlined
                color="colorGray"
                small
                @click="getProducts()"
              >
                todos
              </v-btn>
              <li></li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row>
          <v-col cols="3">
            <div class="usefood-flex-container usefood-flex-align-end">
              <v-icon x-large>mdi-shopping</v-icon>
              <span class="subtitle">Produtos cadastrados</span>
            </div>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="keyword"
              @keyup="getProductsSearch()"
              outlined
              label="Buscar na categoria"
              prepend-inner-icon="mdi-magnify"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-combobox
              outlined
              :items="orderOptions"
              item-value="Menor preço"
              label="Ordenar por"
              v-model="selectOrder"
              @change="orderProducts()"
            >
            </v-combobox>
          </v-col>
        </v-row>
      </v-container>
      <div v-for="(product, index) in products" :key="index">
        <CardProduct
          :product="products[index]"
          @emit-click="removeProductById"
        />
      </div>
      <v-container>
        <v-row justify="center">
          <v-col
            cols="12"
            class="
              usefood-flex-container
              usefood-flex-align-center
              usefood-flex-justify-content-center
            "
          >
            <v-btn
              class="buttonRegister"
              depressed
              color="primary"
              to="/register"
            >
              Cadastrar Produto
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import CardProduct from "../../components/home/CardProduct.vue";
import {
  readProducts,
  findProductsByName,
  readCategories,
  filterProductsByCategorie,
  deleteProduct,
} from "../../services/api";

export default {
  name: "home",

  components: {
    /*   Empty, */
    CardProduct,
  },

  data() {
    return {
      orderOptions: ["Maior preço", "Menor preço"],
      categories: [],
      products: [],
      keyword: "",
      selectOrder: "",
      productId: "",
    };
  },

  methods: {
    getProducts() {
      readProducts().then((res) => {
        this.products = res.data;
        console.log(this.products);
      });
    },

    getProductsSearch() {
      findProductsByName(this.keyword).then((res) => {
        this.products = res.data;
        console.log(this.products);
      });
    },

    getCategories() {
      readCategories().then((res) => {
        this.categories = res.data;
      });
    },

    getProductsFromFilter(aux) {
      filterProductsByCategorie(aux).then((res) => {
        this.products = res.data;
      });
    },

    orderProducts() {
      if (this.selectOrder === "Menor preço") {
        this.products.sort((a, b) => a.price - b.price);
      } else {
        this.products.sort((a, b) => b.price - a.price);
      }

      console.log(this.products);
    },
    removeProductById(id) {
      console.log("funçao chamada");
      deleteProduct(id).then((res) => {
        console.log(res);
        console.log("Chegou aqui");
        this.getProducts();
      });
    },
    openDialog() {
      this.dialog = true;
    },
  },

  mounted() {
    this.getProducts();
    this.getCategories();
    this.orderProducts();
  },
};
</script>
<style lang="scss" scoped>
ul {
  li {
    list-style-type: none;
  }
}
//dialog
.buttons-dialog {
  margin-left: 10px;
}
.dialog-card {
  padding: 20px;
  justify-content: center;
}
.dialog-title {
  font-weight: 500;
  font-size: 20px;
  color: #c14d19;
}

.align-center {
  margin-left: auto;
  margin-right: auto;
}

.buttonRegister {
  margin-bottom: 30px;
}
</style>