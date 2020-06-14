import classNames from "classnames";
import React from "react";

export default function Navigation(props) {
  return <nav className={getNavbarClassNames()}>{props.children || false}</nav>;
}

function getNavbarClassNames() {
  const classes = ["navbar", "navbar-expand-lg", "navbar-light", "bg-light"];
  return classNames(classes);
}
