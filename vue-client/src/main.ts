// import './assets/main.css'

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/dist/vuetify-labs.min.css";
import { defaultDarkTheme, defaultLightTheme } from "./types/Themes";

const app = createApp(App);
const vuetify = createVuetify({
	components,
	directives,
	theme: {
		defaultTheme: 'defaultDarkTheme',
		themes: {
			defaultDarkTheme,
			defaultLightTheme
		}
	}
});

app.use(router);
app.use(vuetify);
app.mount("#app");
