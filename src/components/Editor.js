import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayOnPreview } from "../redux/actions/action";
import "./Editor.css";

function Editor() {
  const initVal =
    "# Welcome to my React Markdown Previewer!\n\r\
## This is a sub-heading...\n\r\
### And here's some other cool stuff:\n\r\
Heres some code, `<div></div>`, between 2 backticks.\n\r\
  ```\n\r\
// this is multi-line code:\n\r\
function anotherExample(firstLine, lastLine) {\n\r\
  if (firstLine == '```' && lastLine == '```') {\n\r\
    return multiLineCode;\n\r\
  }\n\r\
}\n\r\
```\n\r\
You can also make text **bold**... whoa!\n\r\
Or _italic_.\n\r\
Or... wait for it... **_both!_**\n\r\
And feel free to go crazy ~~crossing stuff out~~.\n\r\
There's also [links](https://www.freecodecamp.com), and\n\r\
> Block Quotes!\n\r\
And if you want to get really crazy, even tables:\n\r\
Wild Header | Crazy Header | Another Header?\n\r\
------------ | ------------- | -------------\n\r\
Your content can | be here, and it | can be here....\n\r\
And here. | Okay. | I think we get it.\n\r\
- And of course there are lists.\n\r\
  - Some are bulleted.\n\r\
      - With different indentation levels.\n\r\
        - That look like this.\n\r\
          \n\r\
1. And there are numbererd lists too.\n\r\
1. Use just 1s if you want!\n\r\
1. And last but not least, let's not forget embedded images:\n\r\
  \n\r\
![React Logo w/ Text](https://goo.gl/Umyytc)\n\r";

  const dispatch = useDispatch();
  const dataT = useSelector((state) => state.editText);

  const [text, settext] = useState(initVal);

  useEffect(() => {
    dispatch(displayOnPreview(text));
  }, []);

  return (
    <div className="col-6 editor_outer gx-0">
      <header className="text-center">Editor</header>
      <textarea
        className="w-100"
        name=""
        id="editor"
        cols="30"
        rows="10"
        value={dataT}
        onChange={(event) => {
          dispatch(displayOnPreview(event.target.value));
          console.log(event.target.value);
        }}
      ></textarea>
    </div>
  );
}

export default Editor;
