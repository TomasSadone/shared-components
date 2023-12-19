import "../../assets/index18.css";
import { jsx as o } from "react/jsx-runtime";
import r from "classnames";
const a = "_dot_1pa5s_13", p = "_pink_1pa5s_20", d = "_stroke_1pa5s_24", c = "_red_1pa5s_31", l = "_blue_1pa5s_42", i = "_green_1pa5s_53", g = "_orange_1pa5s_64", e = {
  dot: a,
  pink: p,
  stroke: d,
  red: c,
  blue: l,
  green: i,
  orange: g,
  default: "_default_1pa5s_75"
}, f = ({ text: s, withDot: t, color: _, stroke: n }) => /* @__PURE__ */ o(
  "div",
  {
    className: r("badge", e[_ || "default"], {
      [e.dot]: t,
      [e.stroke]: n
    }),
    children: /* @__PURE__ */ o("p", { children: s })
  }
);
export {
  f as Badge
};
