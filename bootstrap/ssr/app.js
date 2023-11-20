import { resolveComponent, useSSRContext, createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { ssrRenderComponent } from "vue/server-renderer";
const admin = [
  {
    path: "/admin",
    component: () => import("./assets/home-1877f6d1.js"),
    children: [
      {
        path: "users",
        name: "admin-users",
        component: () => import("./assets/index-a4d37dd1.js")
      }
    ]
  }
];
const routes = [...admin];
const router = createRouter({
  history: createWebHistory(),
  routes
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_view = resolveComponent("router-view");
  _push(ssrRenderComponent(_component_router_view, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const app = createApp(App);
app.user(router);
app.mount("#app");
export {
  _export_sfc as _
};
