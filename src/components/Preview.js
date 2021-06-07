import React from "react";
import { useSelector } from "react-redux";
import marked from "marked";

marked.setOptions({
  breaks: true
});
function Preview() {
  const dataT = useSelector((state) => state.editText);

  const newData = marked(dataT);
  function createMarkup() {
    return { __html: marked(dataT) };
  }
  return (
    <div className="col-10 editor_outer gx-0">
      <header className="text-center">Preview</header>
      <div
        className="w-100"
        style={{ whiteSpace: "pre-wrap" }}
        dangerouslySetInnerHTML={createMarkup()}
        id="preview"
      ></div>
    </div>
  );
}

export default Preview;
