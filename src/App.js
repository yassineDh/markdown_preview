import "./App.css";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
function App() {
  return (
    <div className="container-fluid AppBackground ">
      <div className="row justify-content-center align-items-center py-5">
        <Editor />
      </div>
      <div className="row justify-content-center align-items-center">
        <Preview />
      </div>
    </div>
  );
}

export default App;
