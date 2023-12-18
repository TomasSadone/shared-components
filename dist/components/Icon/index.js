import { jsx as o } from "react/jsx-runtime";
import g from "classnames";
import { icons as i } from "../../constants/svgIcons.js";
const A = ({
  name: r,
  size: l,
  className: h,
  fill: s,
  viewBox: a,
  onClick: d,
  stroke: m,
  strokeLinecap: t,
  strokeLinejoin: c,
  strokeWidth: f
}) => /* @__PURE__ */ o(
  "svg",
  {
    className: g(h),
    width: l || 16,
    height: l || 16,
    viewBox: a || "0 0 16 16",
    fill: s,
    onClick: d,
    children: Array.isArray(i[r]) ? i[r].map(({ path: p, fill: x }) => /* @__PURE__ */ o(
      "path",
      {
        stroke: m || "10",
        strokeLinecap: t,
        strokeLinejoin: c,
        strokeWidth: f,
        fill: x,
        d: p
      },
      p
    )) : /* @__PURE__ */ o(
      "path",
      {
        stroke: m || "10",
        strokeWidth: f,
        strokeLinejoin: c,
        strokeLinecap: t,
        d: i[r]
      }
    )
  }
);
export {
  A as Icon
};
