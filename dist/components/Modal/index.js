import "../../assets/index.css";
import { jsx as o, Fragment as d } from "react/jsx-runtime";
const s = ({ children: i, open: l, setOpen: a }) => /* @__PURE__ */ o(d, { children: /* @__PURE__ */ o("div", { onClick: () => {
  a && a(!1);
}, className: ` ${l && "open"} backdrop`, children: /* @__PURE__ */ o("div", { onClick: (c) => c.stopPropagation(), className: "modal", children: i }) }) });
export {
  s as Modal
};
