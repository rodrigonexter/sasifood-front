<template>
  <v-app>
    <nav>
      <Header/>
    </nav>
    <router-view></router-view>
    <footer>
      <Footer/>
    </footer>
  </v-app>
</template>
 

<script>
import Header from './components/shared/Header.vue';
import Footer from './components/shared/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
