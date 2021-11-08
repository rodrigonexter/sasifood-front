import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      themes: {
        light: {
          primary: "#C14D19", // #E53935
          secondary:"" , // #FFCDD2
          accent:"" ,
          colorBlack:"#262626",
          colorGray:"#262626" // #3F51B5
        },
      },
    },
  })
