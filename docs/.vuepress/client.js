import { defineClientConfig } from "vuepress/client";
import MiniBlog from "./components/MiniBlog.vue";

export default defineClientConfig({
  enhance({ app }) {
    app.component("MiniBlog", MiniBlog);
  },
});
