import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/explorers",
    name: "explorers",
    component: () => import("./components/ExplorersList")
  },
  {
    path: "/explorer/:id",
    name: "explorer-details",
    component: () => import("./components/Explorer")
  },
  {
    path: "/add",
    name: "add-explorer",
    component: () => import("./components/AddExplorer")
  },
  {
    path: "/MCs",
    alias: "/missionCommanders",
    name: "missionCommanders",
    component: () => import("./components/MClist")
  },
  {
    path: "/MCs/:id",
    name: "missionCommander-details",
    component: () => import("./components/MissionCommander")
  },
  {
    path: "/addMC",
    name: "add-missionCommander",
    component: () => import("./components/addMC")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
