import "@mdi/font/css/materialdesignicons.css";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createVuetify } from "vuetify";

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "tekLight",
    themes: {
      tekLight: {
        dark: false,
        colors: {
          primary: "#3156D3",
          secondary: "#637381",
          background: "#F4F6FA",
          surface: "#FFFFFF",
          success: "#12A474",
          warning: "#E7A21A",
          error: "#D64D5B",
        },
      },
    },
  },
});
