import "../../assets/index2.css";
import { jsxs as a, jsx as r } from "react/jsx-runtime";
const s = "_title_n94hg_1", h = "_paragraph_n94hg_7", l = "_hr_n94hg_13", g = "_orange_n94hg_16", o = "_red_n94hg_19", c = "_green_n94hg_22", i = "_blue_n94hg_25", e = {
  title: s,
  paragraph: h,
  hr: l,
  orange: g,
  red: o,
  green: c,
  blue: i
}, m = ({ title: _, paragraph: n, hr: t }) => /* @__PURE__ */ a("div", { children: [
  /* @__PURE__ */ r("h1", { className: e.title, children: _ }),
  n ? /* @__PURE__ */ r("p", { className: e.paragraph, children: n }) : null,
  t ? /* @__PURE__ */ r("hr", { className: `${e.hr} ${e[t]}` }) : null
] });
export {
  m as Header
};
