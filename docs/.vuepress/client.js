import { defineClientConfig } from "vuepress/client";
import DonationBar from "./components/DonationBar.vue";
import MiniBlog from "./components/MiniBlog.vue";

export default defineClientConfig({
  enhance({ app }) {
    app.component("DonationBar", DonationBar);
    app.component("MiniBlog", MiniBlog);
  },
});
