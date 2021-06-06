import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayOnPreview } from "../redux/actions/action";
import "./Editor.css";

function Editor() {
  const dispatch = useDispatch();
  return (
    <div className="col-4 editor_outer gx-0">
      <header className="text-center">Editor</header>
      <textarea
        className="w-100"
        name=""
        id="editor"
        cols="30"
        rows="10"
        onChange={(event) => dispatch(displayOnPreview(event.target.value))}
      ></textarea>
    </div>
  );
}

export default Editor;
