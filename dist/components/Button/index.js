import "../../assets/index16.css";
import { jsxs as j, jsx as n } from "react/jsx-runtime";
import { Icon as a } from "../Icon/index.js";
import b from "classnames";
import { Loader as f } from "../Loader/index.js";
const u = "_icon_container_18jjb_1", h = "_end_icon_container_18jjb_5", s = {
  icon_container: u,
  end_icon_container: h
}, B = ({
  title: m,
  color: o,
  icon: i,
  iconProps: d,
  endIcon: c,
  endIconProps: l,
  secondary: e,
  stroke: t,
  text: r,
  isLoading: _,
  ...p
}) => /* @__PURE__ */ j(
  "button",
  {
    disabled: _,
    className: b("button", o, { secondary: e, stroke: t, text: r }),
    ...p,
    children: [
      i && /* @__PURE__ */ n("div", { className: s.icon_container, children: /* @__PURE__ */ n(a, { ...d, name: i, size: 20 }) }),
      m,
      c && /* @__PURE__ */ n("div", { className: s.end_icon_container, children: /* @__PURE__ */ n(a, { ...l, name: c, size: 20 }) }),
      _ && /* @__PURE__ */ n(f, { color: t || r ? void 0 : o, useColor: e })
    ]
  }
);
export {
  B as AppButton
};
