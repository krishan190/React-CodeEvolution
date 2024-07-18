import React from "react";
import "./mystyles.css";

function StyleSheet(props) {
  let className = props.primary ? "primary" : "";
  return <h1 className={`${className} font-xl`}>StyleSheet</h1>;
}

export default StyleSheet;
