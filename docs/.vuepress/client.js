import { defineClientConfig } from "vuepress/client";
import DemoLogin from "./components/DemoLogin.vue";
import DonationBar from "./components/DonationBar.vue";
import MiniBlog from "./components/MiniBlog.vue";
import RoadmapProgress from "./components/RoadmapProgress.vue";
import RedirectHome from "./components/RedirectHome.vue";

export default defineClientConfig({
  enhance({ app }) {
    app.component("DemoLogin", DemoLogin);
    app.component("DonationBar", DonationBar);
    app.component("MiniBlog", MiniBlog);
    app.component("RoadmapProgress", RoadmapProgress);
  },
  layouts: {
    RedirectHome,
  },
});
