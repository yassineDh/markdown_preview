import React from "react";
import {useSelector } from "react-redux";
function Preview() {
  const dataT = useSelector((state) => state.editText);
  return (
    <div className="col-6 editor_outer gx-0">
      <header className="text-center">Preview</header>
      <div className="w-100">{dataT}</div>
    </div>
  );
}

export default Preview;
