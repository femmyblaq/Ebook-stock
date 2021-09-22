import Home from "./components/Home.vue";
import Stocks from "./components/Stocks/Stocks.vue";
import Portfolio from "./components/Portfolio/Portfolio.vue";

export const routes = [
  { path: "/", component: Home },
  { path: "/stocks", component: Stocks },
  { path: "/portfolio", component: Portfolio },
];
