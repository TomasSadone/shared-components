import "../../assets/index18.css";
import { jsx as a } from "react/jsx-runtime";
import d from "classnames";
const l = "_loader_19y8t_1", t = "_loader_white_19y8t_17", n = "_loader_red_19y8t_21", s = "_loader_orange_19y8t_25", y = "_loader_green_19y8t_29", g = "_loader_blue_19y8t_33", r = {
  loader: l,
  loader_white: t,
  "loader-white": "_loader-white_19y8t_1",
  loader_red: n,
  "loader-red": "_loader-red_19y8t_1",
  loader_orange: s,
  "loader-orange": "_loader-orange_19y8t_1",
  loader_green: y,
  "loader-green": "_loader-green_19y8t_1",
  loader_blue: g,
  "loader-blue": "_loader-blue_19y8t_1"
}, m = ({ className: _, color: e, useColor: o }) => /* @__PURE__ */ a(
  "div",
  {
    className: d(r.loader, _, {
      [r[`loader_${o ? e : "white"}`]]: !!e
    })
  }
);
export {
  m as Loader
};
